import "./UserAvatar.scss";

// user avatar in the side nav -> icon railing
export default function UserAvatar({ initials = "FL" }) {
    return (
        <button
            type="button"
            className="user-avatar"
            aria-label={`Account: ${initials} user avatar`}
        >
            {initials}
        </button>
    );
}
