import { useState, useEffect } from 'react';

import Character from "../components/Character";
import CharacterLoading from "./CharacterLoading";

const Characters = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setCharacters([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
            setLoading(false);
        }, 3000)

    }, []);

    return (
        <div className="characters">
            {
                loading ?
                    Array.from(Array(8), (number, i) => {
                        return <CharacterLoading key={i} />
                    })
                    :
                    characters.map((character, key) => {
                        return <Character key={key} image={character} />
                    })
            }
        </div>
    );
}

export default Characters;
