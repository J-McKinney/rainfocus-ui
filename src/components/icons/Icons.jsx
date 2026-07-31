import IconSlot from "./IconSlot";

import rfLogo from "../../icons/rf-logo.png";
import turnArrow from "../../icons/turnArrow.png";
import addCircleOutline from "../../icons/add-circle-outline.png";
import monitor from "../../icons/monitor.png";
import attendee from "../../icons/attendee.png";
import selectedDot from "../../icons/selectedDot.png";
import notSelectedDot from "../../icons/notSelectedDot.png";
import search from "../../icons/search.svg";

// icons
export function RfLogo({ className }) {
    return (
        <IconSlot
            width={28}
            height={23}
            className={className}
            label="RainFocus"
        >
            <img src={rfLogo} alt="RainFocus Logo" />
        </IconSlot>
    );
}

export function SearchIcon({ className }) {
    return (
        <IconSlot width={13} height={13} className={className}>
            <img src={search} alt="Search" />
        </IconSlot>
    );
}

export function WorkflowArrowIcon({ className }) {
    return (
        <IconSlot width={18} height={18} className={className}>
            <img src={turnArrow} alt="Attendee Registration" />
        </IconSlot>
    );
}

export function PlusCircleIcon({ className }) {
    return (
        <IconSlot width={22} height={22} round className={className}>
            <img src={addCircleOutline} alt="Add workflow" />
        </IconSlot>
    );
}

export function MonitorIcon({ className }) {
    return (
        <IconSlot width={19} height={18} className={className}>
            <img src={monitor} alt="Attendee Portal" />
        </IconSlot>
    );
}

export function AttendeeModuleIcon({ className }) {
    return (
        <IconSlot width={38} height={38} className={className}>
            <img src={attendee} alt="Attendee" />
        </IconSlot>
    );
}

export function NavDotIcon({ active = false, className }) {
    return (
        <IconSlot width={20} height={20} round className={className}>
            <img src={active ? selectedDot : notSelectedDot} alt="" />
        </IconSlot>
    );
}
