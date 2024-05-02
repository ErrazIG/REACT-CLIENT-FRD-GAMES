import style from "./header-user.module.css";
import { useRecoilState } from 'recoil';
import { tokenAtom } from '../../atoms/token.atom.js';
import { useNavigate } from 'react-router-dom';

const HeaderUser = () => {

    const [token, setToken] = useRecoilState(tokenAtom);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        setToken(null);
        navigate('/');
    }

    const headerUserImg = '';
    return (
        <div className={style.headerUser}>

            <div className={style.headerUserInfo}>
                <img
                    className={style.headerUserImg}
                    src={headerUserImg}
                    alt="profile picture"
                />
                <p className={style.headerUserUsername}>ErrazIG</p>
            </div>


            <Link to="/auth/logout" onClick={handleLogout}>
                <img
                    className={style.headerUserLogout}
                    src={headerUserLogout}
                    alt="Logout icon"
                />
            </Link>
        </div>
    );
};
export default HeaderUser;