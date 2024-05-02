import style from "./header.module.css"
import Searchbar from "../../components/searchbar/searchbar.jsx";
import { BsSearch } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <header className={style.header}>

                <Searchbar />
                {/* <div className={style.headerSearch}>
                    <input className={style.headerSearchbar} type="text" placeholder="search..." />
                    <button className={style.headerSearchBtn}>
                    <BsSearch  className={style.headerSearchIcon} />

                    </button>
                </div> */}
                
            </header>
        </>
    )
}
export default Header;