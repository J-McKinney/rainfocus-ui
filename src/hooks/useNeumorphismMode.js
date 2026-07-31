import { useEffect, useState } from "react";

const STORAGE_KEY = "rf-neumorphism";

export default function useNeumorphismMode() {
    const [isNeumorphic, setIsNeumorphic] = useState(
        () => localStorage.getItem(STORAGE_KEY) === "on"
    );

    useEffect(() => {
        document.documentElement.dataset.neumorphism = isNeumorphic ? "on" : "off";
        localStorage.setItem(STORAGE_KEY, isNeumorphic ? "on" : "off");
    }, [isNeumorphic]);

    const toggle = () => setIsNeumorphic((prev) => !prev);

    return [isNeumorphic, toggle];
}
