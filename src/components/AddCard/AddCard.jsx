import Card from "../Card/Card";
import "./AddCard.scss";
import { PlusCircleIcon } from "../icons";

// add registration workflow card
export default function AddCard({ label }) {
    return (
        <Card as="button" type="button" className="add-card">
            <PlusCircleIcon className="add-card__icon" />
            <span className="add-card__label">{label}</span>
        </Card>
    );
}
