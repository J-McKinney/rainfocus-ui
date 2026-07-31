import Card from "../Card/Card";
import "./WorkflowCard.scss";
import { WorkflowArrowIcon } from "../icons";

// step 2 registration workflow card insides
export default function WorkflowCard({ title, description }) {
    return (
        <Card as="button" type="button" className="workflow-card">
            <span className="workflow-card__head">
                <WorkflowArrowIcon className="workflow-card__icon" />
                <span className="workflow-card__title">{title}</span>
            </span>
            <span className="workflow-card__desc">{description}</span>
        </Card>
    );
}
