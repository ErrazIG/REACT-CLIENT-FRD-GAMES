import style from "./header-user.module.css";
import headerUserImg from "../../assets/9910000074226_cg.jpg";

const HeaderUser = () => {
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

            <img
                className={style.headerUserLogout}
                src={headerUserLogout}
                alt="Logout icon"
            />
        </div>
    );
};
export default HeaderUser;