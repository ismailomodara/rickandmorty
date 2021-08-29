import { useState } from 'react';

import Header from "../components/Header";
import Characters from "../components/Characters";

const Home = () => {
    const [characters, setCharacters] = useState(0);

    return (
        <div className="home">
            <Header characters={characters} />
            <Characters setCharctersLength={setCharacters} />
        </div>
    );
}

export default Home;
