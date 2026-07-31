// card must precede this component's overrides
import Card from "../Card/Card";
import "./PortalCard.scss";
import { MonitorIcon } from "../icons";

// step 3 post registration card
export default function PortalCard({ title, description }) {
    return (
        <Card as="button" type="button" className="portal-card">
            <span className="portal-card__head">
                <MonitorIcon className="portal-card__icon" />
                <span className="portal-card__title">{title}</span>
            </span>
            <span className="portal-card__desc">{description}</span>
        </Card>
    );
}
