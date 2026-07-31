import "./StepLabel.scss";

// step label headers
export default function StepLabel({ step, children, first = false }) {
    return (
        <p className={`step-label ${first ? "step-label--first" : ""}`}>
            <strong className="step-label__step">{step}</strong> {children}
        </p>
    );
}
