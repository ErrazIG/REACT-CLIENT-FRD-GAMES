import axios from "axios";
import edit from "../../assets/links/icons8-edit-30.png";
import imgProfile from "../../assets/OIG1.png";
import style from "./profile-header.module.css";
import { jwtDecode } from "jwt-decode";
import { useRecoilState } from "recoil";
import { tokenAtom } from "../../atoms/token.atom.js";
import { useEffect } from "react";
import { useState } from "react";

const ProfileHeader = () => {
  const [token, setToken] = useRecoilState(tokenAtom);
  const [data, setData] = useState({});
  
  //attention au useEffect bien revoir !!!!
  useEffect(() => {
    if (token?.username) {

      axios
      .get(`http://localhost:8080/api/member/${token.username}`)
      .then((response) => {
        console.log("response data : ", response.data);
        
        setData(response.data);
        localStorage.setItem("data", JSON.stringify(data));
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération de l'utilisateur :",
          error
        );
      });
    }
  }, [token]);


  console.log("useState DATA : ", { data });
  return (
    <>
      <h2 className={style.mainContentTitle}>Profile</h2>
      <div className={style.mainContentUserInfo}>
        <img className={style.mainContentUserInfoImg} src={imgProfile} alt="" />
        <div className={style.mainContentUserInfoText}>
          <h3>{data && data.username}</h3>
          <p>{data && data.email}</p>
          <p>{data && data.description}</p>
        </div>
        <img className={style.btnEditProfile} src={edit} alt="edit icon" />
      </div>
    </>
  );
};
export default ProfileHeader;
