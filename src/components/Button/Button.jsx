import "./Button.scss";

// global button component
export default function Button({
    children,
    variant = "primary",
    type = "button",
    className = "",
    ...rest
}) {
    return (
        <button
            type={type}
            className={`button button--${variant} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}
