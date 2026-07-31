import "./IconRail.scss";
import { RfLogo, EventAvatar } from "../icons";
import UserAvatar from "../UserAvatar/UserAvatar";
import smallMtnIcon from "../../icons/smallMtnIcon.png";

// left railing, left of the side nav
export default function IconRail({
    onLogoClick,
    onEventIconClick,
    onUserAvatarClick,
}) {
    return (
        <div className="icon-rail">
            <RfLogo className="icon-rail__logo" onClick={onLogoClick} />

            <button
                type="button"
                className="icon-rail__event"
                aria-label="RainFocus Summit"
                onClick={onEventIconClick}
            >
                <EventAvatar size={31} radius={6}>
                    <img src={smallMtnIcon} alt="Event Avatar" />
                </EventAvatar>
            </button>

            <div className="icon-rail__spacer" />

            <UserAvatar initials="FL" onClick={onUserAvatarClick} />
        </div>
    );
}
