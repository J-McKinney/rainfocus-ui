import "./AttendeeModule.scss";
import { AttendeeModuleIcon } from "../icons";
import StepLabel from "../StepLabel/StepLabel";
import BaseSettingsCard from "../BaseSettingsCard/BaseSettingsCard";
import WorkflowCard from "../WorkflowCard/WorkflowCard";
import AddCard from "../AddCard/AddCard";
import PortalCard from "../PortalCard/PortalCard";

// dummy information for the attendee body section
const PLACEHOLDER_COPY =
    "Description that explains the value goes here. Description that explains the value goes here.";

const BASE_SETTINGS = [
    {
        id: "general",
        title: "General",
        description: "Define Attendee types & attributes",
    },
    { id: "title-2", title: "Title", description: PLACEHOLDER_COPY },
    { id: "title-3", title: "Title", description: PLACEHOLDER_COPY },
];

const WORKFLOWS = [
    {
        id: "workflow-1",
        title: "Attendee Registration",
        description: "Start by creating a general registration workflow",
    },
    {
        id: "workflow-2",
        title: "Attendee Registration",
        description: "Start by creating a general registration workflow",
    },
    {
        id: "workflow-3",
        title: "Attendee Registration",
        description: "Start by creating a general registration workflow",
    },
];

// attendee body with the 3 steps
export default function AttendeeModule() {
    return (
        <section className="attendee-module">
            <header className="attendee-module__header">
                <AttendeeModuleIcon className="attendee-module__icon" />
                <h3 className="attendee-module__title">Attendee</h3>
            </header>

            <StepLabel step="Step 1:" first>
                Base settings.
            </StepLabel>
            <div className="attendee-module__cards">
                <BaseSettingsCard items={BASE_SETTINGS} />
            </div>

            <StepLabel step="Step 2:">Build registration workflows.</StepLabel>
            <div className="attendee-module__cards attendee-module__grid">
                {WORKFLOWS.map((workflow) => (
                    <WorkflowCard
                        key={workflow.id}
                        title={workflow.title}
                        description={workflow.description}
                    />
                ))}
                <AddCard label="Add Registration Workflow" />
            </div>

            <StepLabel step="Step 3:">
                Design post-registration experiences.
            </StepLabel>
            <div className="attendee-module__cards attendee-module__grid">
                <PortalCard
                    title="Attendee Portal"
                    description="Manage the portal that attendees will see after they've register for your event."
                />
            </div>
        </section>
    );
}
