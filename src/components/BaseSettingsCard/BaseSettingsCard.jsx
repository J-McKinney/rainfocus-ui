// card must precede this component's overrides
import Card from "../Card/Card";
import "./BaseSettingsCard.scss";

// step 1 wide card
export default function BaseSettingsCard({ items }) {
    return (
        <Card className="base-settings-card">
            <div className="base-settings-card__grid">
                {items.map((item) => (
                    <div className="base-settings-card__col" key={item.id}>
                        <h4 className="base-settings-card__col-title">
                            {item.title}
                        </h4>
                        <p className="base-settings-card__col-desc">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </Card>
    );
}
