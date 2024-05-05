import style from "./header-user.module.css";
import { useRecoilState } from "recoil";
import { tokenAtom } from "../../atoms/token.atom.js";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { jwtDecode } from "jwt-decode";

const HeaderUser = () => {
  const [token, setToken] = useRecoilState(tokenAtom);

  const handleLogout = (e) => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const decodedToken = jwtDecode(token)
  // console.log(decodedToken);
  // console.log(decodedToken.img);

  const imgProfil = 'http://localhost:8080' + decodedToken.img;

  return (
    <div className={style.headerUser}>
      <div className={style.headerUserInfo}>
        <img
          className={style.headerUserImg}
          src={imgProfil}
          alt="profile picture"
        />
        <p className={style.headerUserUsername}>ErrazIG</p>
      </div>

      <Link to="/" onClick={handleLogout}>
        
        <CiLogout className={style.headerUserLogout} />
      </Link>
    </div>
  );
};
export default HeaderUser;
