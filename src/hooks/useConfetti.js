import { useCallback, useRef } from "react";

const COLORS = ["#ff003c", "#ff8a00", "#ffd500", "#00e5ff", "#7c4dff", "#ff4da6"];
const PARTICLE_COUNT = 120;
const GRAVITY = 0.25;
const DRAG = 0.02;

// fires a one-shot burst of particles from a screen point via a full-viewport canvas overlay
export default function useConfetti() {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const rafRef = useRef(null);

    const ensureCanvas = () => {
        if (canvasRef.current) return canvasRef.current;
        const canvas = document.createElement("canvas");
        canvas.style.position = "fixed";
        canvas.style.inset = "0";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "9999";
        document.body.appendChild(canvas);
        canvasRef.current = canvas;
        return canvas;
    };

    const resize = (canvas) => {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        canvas.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const loop = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        const particles = particlesRef.current;
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.vy += GRAVITY;
            p.vx *= 1 - DRAG;
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.spin;
            p.life -= 0.012;
            if (p.life <= 0) {
                particles.splice(i, 1);
                continue;
            }
            ctx.save();
            ctx.globalAlpha = Math.max(p.life, 0);
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            ctx.restore();
        }

        rafRef.current = particles.length > 0 ? requestAnimationFrame(loop) : null;
    };

    return useCallback((originX, originY) => {
        const canvas = ensureCanvas();
        resize(canvas);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 4 + Math.random() * 8;
            particlesRef.current.push({
                x: originX,
                y: originY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 4,
                size: 4 + Math.random() * 4,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                rotation: Math.random() * 360,
                spin: (Math.random() - 0.5) * 20,
                life: 1,
            });
        }

        if (rafRef.current === null) {
            rafRef.current = requestAnimationFrame(loop);
        }
    }, []);
}
