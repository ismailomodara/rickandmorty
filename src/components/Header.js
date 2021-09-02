import  loadingIcon from "../assets/img/loading.svg"

const Header = ({setQuery, loading}) => {
    return (
        <div className="header">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search for a character"
                    onInput={(event) =>{
                        setQuery(event.target.value)
                    }} />
                { loading && <span><img src={loadingIcon} alt="O" /> </span>}
            </div>
        </div>
    );
}

export default Header;
