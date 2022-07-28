import React from "react";

import Character from "../components/Character";
import CharacterLoading from "./CharacterLoading";

interface CharactersInterface {
    loading: boolean;
    characters: []
}

const Characters: React.FC<CharactersInterface> = ({ loading, characters  }) => {
    return (
        <div className="characters">
            {
                loading ?
                    Array.from(Array(8), (number, i) => {
                        return <CharacterLoading key={i} />
                    })
                    :
                    characters.map((character: any, key: number) => {
                        return <Character key={key} character={character} />
                    })
            }
        </div>
    );
}

export default Characters;
