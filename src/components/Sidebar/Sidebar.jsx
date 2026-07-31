import { useState } from "react";
import "./Sidebar.scss";
import IconRail from "../IconRail/IconRail";
import SideNav from "../SideNav/SideNav";

// the whole sidebar: nav, icon railing, and side nav
export default function Sidebar({ event }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className="sidebar__toggle"
                aria-label="Open navigation"
                aria-expanded={open}
                onClick={() => setOpen(true)}
            >
                <span className="sidebar__toggle-bar" />
            </button>

            {open && (
                <div
                    className="sidebar__backdrop"
                    onClick={() => setOpen(false)}
                />
            )}

            <div className={`sidebar ${open ? "sidebar--open" : ""}`}>
                <IconRail />
                <SideNav event={event} onClose={() => setOpen(false)} />
            </div>
        </>
    );
}
