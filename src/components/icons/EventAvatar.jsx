import IconSlot from "./IconSlot";
import "./EventAvatar.scss";

// the event icon
export default function EventAvatar({
    size = 76,
    radius = 8,
    className = "",
    children,
}) {
    return (
        <IconSlot
            width={size}
            height={size}
            radius={radius}
            className={`event-avatar ${className}`}
        >
            {children}
        </IconSlot>
    );
}
