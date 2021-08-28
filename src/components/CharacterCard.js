import '../assets/css/character_card.scss';
import rick from "../assets/img/rick.jpeg";

const CharacterCard = () => {
    return (
        <div className="character-card">
            <h6 className="character-card__name">Rick <span>Sanchez</span></h6>
            <span className="character-card__status alive">Alive</span>
            <div className="character-card__location">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#031e03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-map-pin">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Earth</span>
            </div>
            <div className="character-card__state">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="feather feather-arrow-right">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </span>
            </div>
            <div className="character-card__image">
                <img src={rick} alt="Rick" />
            </div>
        </div>
    );
}

export default CharacterCard;