import "./IconSlot.scss";

// icon slot
export default function IconSlot({
    width,
    height = width,
    radius = 3,
    round = false,
    className = "",
    label,
    children,
}) {
    return (
        <span
            className={`icon-slot ${className}`}
            style={{
                width,
                height,
                borderRadius: round ? "50%" : radius,
            }}
            role={label ? "img" : undefined}
            aria-label={label}
            aria-hidden={label ? undefined : "true"}
        >
            {children}
        </span>
    );
}
