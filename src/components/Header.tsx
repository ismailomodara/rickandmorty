import React from "react";

const loadingIcon = require("../assets/img/loading.svg");
const logo = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg";

interface HeaderInterface {
    setQuery: any;
    loading: boolean
}
const Header: React.FC<HeaderInterface> = ({ setQuery, loading }) => {
    const debounce = (callback: any) => {
        let timeout: any;
        return () => {
            clearTimeout( timeout );
            timeout = setTimeout(callback, 4000);
        }
    }

    const tempDebounce = (event: any) => {
        setTimeout(() => {
            setQuery(event.target.value)
        }, 2000)
    }

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search for a character"
                    onInput={tempDebounce} />
                { loading && <span><img src={loadingIcon} alt="O" /> </span>}
            </div>
        </div>
    );
}

export default Header;
