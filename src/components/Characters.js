import '../assets/css/character_card.scss';
import CharacterCard from "../components/CharacterCard";

const Characters = () => {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div className="characters">
            {
                images.map((image, key) => {
                    return <CharacterCard key={key} image={image} />
                })
            }
        </div>
    );
}

export default Characters;
