import style from "./header.module.css"
import Searchbar from "../../components/searchbar/searchbar.jsx";
import HeaderUser from "../../components/header-user/header-user.jsx";
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/token.atom.js';
import { Link } from "react-router-dom";
import ThemeToggle from "../../components/theme-toggle/theme-toggle.jsx";

const Header = () => {

    const token = useRecoilValue(tokenAtom);

    return (
        <>
            <header className={style.header}>
                <Searchbar />
                {!!token ? (
                    <>
                    <div className={style.headerOptions}>
                        <HeaderUser />
                        <ThemeToggle />
                    </div>
                    </>
                ) : (
                    <>
                        <div className={style.headerOptions}>
                            <Link to='/auth/login'>
                                <button className={style.authBtn}>Login</button>
                            </Link>

                            <Link to='/auth/register'>
                                <button className={style.authBtn}>Register</button>
                            </Link>
                        <ThemeToggle />
                        </div>
                    </>
                )}

            </header>
        </>
    )
}
export default Header;