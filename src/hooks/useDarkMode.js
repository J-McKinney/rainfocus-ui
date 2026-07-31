import { useEffect, useState } from "react";

const STORAGE_KEY = "rf-theme";

export default function useDarkMode() {
    const [isDark, setIsDark] = useState(
        () => localStorage.getItem(STORAGE_KEY) === "dark"
    );

    useEffect(() => {
        document.documentElement.dataset.theme = isDark ? "dark" : "light";
        localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    }, [isDark]);

    const toggle = () => setIsDark((prev) => !prev);

    return [isDark, toggle];
}
