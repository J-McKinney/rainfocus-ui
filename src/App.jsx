import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import EventHeader from "./components/EventHeader/EventHeader";
import SetupGuide from "./components/SetupGuide/SetupGuide";

const EVENT = {
    name: "RainFocus Summit",
    date: "December 15th",
    location: "Lehi, Utah",
    shortLocation: "Lehi, UT",
};

export default function App() {
    return (
        <div className="app">
            <Sidebar event={EVENT} />

            <main className="app__main">
                <div className="app__content">
                    <EventHeader event={EVENT} />
                    <SetupGuide />
                </div>
            </main>
        </div>
    );
}
