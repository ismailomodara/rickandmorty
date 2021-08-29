import "../assets/css/header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="search">
                <input type="text" placeholder="Search for character" />
                <button><span>Search</span></button>
            </div>
            <h1 className="header__title">50 Characters</h1>
        </div>
    );
}

export default Header;
