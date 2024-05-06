import style from "./header-user.module.css";
import { useRecoilState } from "recoil";
import { tokenAtom } from "../../atoms/token.atom.js";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

const HeaderUser = () => {
  const [token, setToken] = useRecoilState(tokenAtom);

  const handleLogout = (e) => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const imgProfil = "http://localhost:8080" + token.img;

  return (
    <Link className={style.headerUserLink} to={`/profile/${token.username}`}>
      <div className={style.headerUser}>
        <div className={style.headerUserInfo}>
          <img
            className={style.headerUserImg}
            src={imgProfil}
            alt="profile picture"
          />
          <p className={style.headerUserUsername}>{token.username}</p>
        </div>

        <Link to="/" onClick={handleLogout}>
          <CiLogout className={style.headerUserLogout} />
        </Link>
      </div>
    </Link>
  );
};
export default HeaderUser;
