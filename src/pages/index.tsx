import { useState, useEffect } from 'react';

import Header from "../components/Header";
import Characters from "../components/Characters";
import { getCharacters } from "../services";

const Home = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [queryName, setQueryName] = useState<string>('');
    const [characters, setCharacters] = useState<[]>([]);

    useEffect( () => {
        setLoading(true);
        getCharacters({ page: 1, filterName: queryName }).then(response => {
            if(!response.loading) {
                setCharacters(response.data.characters.results)
                setLoading(false)
            }
        }).catch(error => console.log(error))
    }, [queryName]);

    return (
        <div className="home">
            <Header loading={loading} setQuery={setQueryName} />
            <Characters characters={characters} loading={loading} />
        </div>
    );
}

export default Home;
