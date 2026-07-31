import "./SearchField.scss";
import { SearchIcon } from "../icons";

// search input
export default function SearchField({ placeholder = "Search" }) {
    return (
        <div className="search-field">
            <SearchIcon className="search-field__icon" />
            <input
                type="text"
                className="search-field__input"
                placeholder={placeholder}
                aria-label={placeholder}
            />
        </div>
    );
}
