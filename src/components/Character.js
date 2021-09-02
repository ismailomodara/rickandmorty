
const Character = ({ character }) => {
    const { name, status, origin, image } = character;

    return (
        <div className="character">
            <h6 className="character__name">{ name.split(' ')[0] } <span>{ name.split(' ')[1] }</span></h6>
            <span className={`character__status ${status.toLowerCase()}`}>{ status }</span>
            <div className="character__location">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#031e03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-map-pin">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{ origin.name }</span>
            </div>
            <div className="character__state">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="feather feather-arrow-right">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </span>
            </div>
            <div className="character__image">
                <img src={image} alt="Rick" />
            </div>
        </div>
    );
}

export default Character;
