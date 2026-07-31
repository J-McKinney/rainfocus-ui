import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import EventHeader from "./components/EventHeader/EventHeader";
import SetupGuide from "./components/SetupGuide/SetupGuide";
import useDarkMode from "./hooks/useDarkMode";
import useNeonMode from "./hooks/useNeonMode";
import useNeumorphismMode from "./hooks/useNeumorphismMode";
import useConfetti from "./hooks/useConfetti";

const EVENT = {
    name: "RainFocus Summit",
    date: "December 15th",
    location: "Lehi, Utah",
    shortLocation: "Lehi, UT",
};

export default function App() {
    const [, toggleDarkMode] = useDarkMode();
    const [, toggleNeon] = useNeonMode();
    const [, toggleNeumorphism] = useNeumorphismMode();
    const confettiBurst = useConfetti();

    const handleEventIconClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        confettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
        toggleNeon();
    };

    return (
        <div className="app">
            <Sidebar
                event={EVENT}
                onLogoClick={toggleDarkMode}
                onEventIconClick={handleEventIconClick}
                onUserAvatarClick={toggleNeumorphism}
            />

            <main className="app__main">
                <div className="app__content">
                    <EventHeader event={EVENT} />
                    <SetupGuide />
                </div>
            </main>
        </div>
    );
}
