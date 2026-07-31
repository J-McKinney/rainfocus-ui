import "./SideNav.scss";
import SearchField from "../SearchField/SearchField";
import Button from "../Button/Button";
import { NavDotIcon } from "../icons";

const NAV_ITEMS = [
    { id: "guide", label: "Guide" },
    {
        id: "attendees",
        label: "Attendees",
        active: true,
        children: [
            { id: "attendees-list", label: "Attendees" },
            { id: "attendee-types", label: "Attendee types" },
            { id: "packages", label: "Packages" },
            { id: "reg-codes", label: "Reg codes" },
            { id: "discounts", label: "Discounts" },
        ],
    },
    { id: "content", label: "Content" },
    { id: "exhibitors", label: "Exhibitors" },
];

// side nav
export default function SideNav({ event, onClose }) {
    return (
        <nav className="side-nav" aria-label="Event navigation">
            <div className="side-nav__header">
                <h2 className="side-nav__event-name">{event.name}</h2>
                <button
                    type="button"
                    className="side-nav__close"
                    aria-label="Close navigation"
                    onClick={onClose}
                >
                    <span className="side-nav__close-bar" />
                </button>
            </div>
            <p className="side-nav__event-meta">
                {event.shortLocation} <span className="side-nav__sep">•</span>
                {" "}
                {event.date}
            </p>

            <div className="side-nav__search">
                <SearchField />
            </div>

            <ul className="side-nav__list">
                {NAV_ITEMS.map((item) => (
                    <li key={item.id}>
                        <button
                            type="button"
                            className={`side-nav__item ${item.active ? "side-nav__item--active" : ""}`}
                            aria-current={item.active ? "page" : undefined}
                        >
                            <NavDotIcon
                                active={item.active}
                                className="side-nav__dot"
                            />
                            <span className="side-nav__label">
                                {item.label}
                            </span>
                        </button>

                        {item.children && (
                            <ul className="side-nav__sublist">
                                {item.children.map((child) => (
                                    <li key={child.id}>
                                        <button
                                            type="button"
                                            className="side-nav__subitem"
                                        >
                                            {child.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            <div className="side-nav__footer">
                <Button variant="primary" className="side-nav__edit-button">
                    Edit event
                </Button>
            </div>
        </nav>
    );
}
