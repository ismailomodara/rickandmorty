import Character from "../components/Character";
import CharacterLoading from "./CharacterLoading";

const Characters = ({loading, characters}) => {
    return (
        <div className="characters">
            {
                loading ?
                    Array.from(Array(8), (number, i) => {
                        return <CharacterLoading key={i} />
                    })
                    :
                    characters.map((character, key) => {
                        return <Character key={key} character={character} />
                    })
            }
        </div>
    );
}

export default Characters;
