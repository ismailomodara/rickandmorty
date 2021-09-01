import { useState, useCallback } from 'react';
import loading from "../assets/img/loading.svg"

const Header = (props) => {
    const [query, setQuery] = useState('');

    const emitQuery = () => {
        props.setQuery(query)
    }

    useCallback(() => {
        emitQuery();
    }, [query])

    return (
        <div className="header">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search for a character"
                    onChange={(event) => setQuery(event.target.value)} />
                { query ? <span><img src={loading} alt="O" /> </span> : ''}
            </div>
            <h1 className="header__title">50 Characters</h1>
        </div>
    );
}

export default Header;
