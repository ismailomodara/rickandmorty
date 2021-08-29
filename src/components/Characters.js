import '../assets/css/characters.scss';
import Character from "../components/Character";
import CharacterLoading from "./CharacterLoading";

const Characters = () => {
    const loading = false;
    const dummyLength = [1, 2, 3, 4, 5, 6, 7, 8];
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <div className="characters">
            {
                loading ?
                    dummyLength.map((image, key) => {
                        return <CharacterLoading key={key} />
                    }) :

                    images.map((image, key) => {
                        return <Character key={key} image={image} />
                    })
            }
        </div>
    );
}

export default Characters;
