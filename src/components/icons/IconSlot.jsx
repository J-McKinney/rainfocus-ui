import "./IconSlot.scss";

// icon slot
export default function IconSlot({
    width,
    height = width,
    radius = 3,
    round = false,
    className = "",
    label,
    onClick,
    children,
}) {
    return (
        <span
            className={`icon-slot ${className}`}
            style={{
                width,
                height,
                borderRadius: round ? "50%" : radius,
                cursor: onClick ? "pointer" : undefined,
            }}
            role={label ? "img" : undefined}
            aria-label={label}
            aria-hidden={label ? undefined : "true"}
            onClick={onClick}
        >
            {children}
        </span>
    );
}
