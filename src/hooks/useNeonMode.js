import { useEffect, useState } from "react";

const STORAGE_KEY = "rf-neon";

export default function useNeonMode() {
    const [isNeon, setIsNeon] = useState(
        () => localStorage.getItem(STORAGE_KEY) === "on"
    );

    useEffect(() => {
        document.documentElement.dataset.neon = isNeon ? "on" : "off";
        localStorage.setItem(STORAGE_KEY, isNeon ? "on" : "off");
    }, [isNeon]);

    const toggle = () => setIsNeon((prev) => !prev);

    return [isNeon, toggle];
}
