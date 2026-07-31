import "./EventHeader.scss";
import { EventAvatar } from "../icons";
import Button from "../Button/Button";
import largeMtnLogo from "../../icons/largeMtnLogo.png";

// event header logo, title, and date
export default function EventHeader({ event }) {
    return (
        <header className="event-header">
            <EventAvatar size={97} radius={10} className="event-header__avatar">
                <img src={largeMtnLogo} alt="Event avatar" />
            </EventAvatar>

            <div className="event-header__title-block">
                <h1 className="event-header__name">{event.name}</h1>
                <p className="event-header__meta">{event.date}</p>
                <p className="event-header__meta">{event.location}</p>
            </div>

            <Button variant="primary" className="event-header__edit-button">
                Edit event
            </Button>
        </header>
    );
}
