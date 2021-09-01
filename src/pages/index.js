import { useState} from 'react';

import Header from "../components/Header";
import Characters from "../components/Characters";

const Home = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="home">
            <Header setQuery={(query) => setQuery(query)} />
            <Characters query={query} />
        </div>
    );
}

export default Home;
