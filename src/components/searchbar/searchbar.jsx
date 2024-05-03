import { CiSearch } from "react-icons/ci";
import style from "./searchbar.module.css";

const Searchbar = () => {
    return (
        <>
            <form className={style.headerSearch} action="">
                <button className={style.headerSearchBtn}>
                    <CiSearch className={style.headerSearchIcon} />
                </button>
                <input className={style.headerSearchbar} placeholder="Search" type="text" />
            </form>
        </>
    );
}
export default Searchbar;