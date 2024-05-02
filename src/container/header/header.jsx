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
                        <HeaderUser />
                        <ThemeToggle />
                    </>
                ) : (
                    <>
                        <div>
                            <Link to='/auth/login'>
                                <button className="auth-btn">Login</button>
                            </Link>

                            <Link to='/auth/register'>
                                <button className="auth-btn">Register</button>
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