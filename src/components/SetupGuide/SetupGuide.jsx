import "./SetupGuide.scss";
import AttendeeModule from "../AttendeeModule/AttendeeModule";

// event setup guide header
export default function SetupGuide() {
    return (
        <section className="setup-guide">
            <h2 className="setup-guide__title">Event setup guide</h2>
            <p className="setup-guide__intro">
                See the available list of modules below. We suggest that you
                start with the attendee module.
            </p>
            <hr className="setup-guide__divider" />
            <AttendeeModule />
        </section>
    );
}
