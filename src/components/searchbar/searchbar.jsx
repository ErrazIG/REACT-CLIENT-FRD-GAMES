import { CiSearch } from "react-icons/ci";
import style from "./searchbar.module.css";

const Searchbar = () => {
    return (
        <div className={style.searchbar}>
            <CiSearch />
            <input type="text" />
        </div>
    );
}
export default Searchbar;