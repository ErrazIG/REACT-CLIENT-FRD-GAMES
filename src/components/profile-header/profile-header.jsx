import axios from "axios";
import edit from "../../assets/links/icons8-edit-30.png";
import style from "./profile-header.module.css";
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

  const handleToggleEdit = () => {
    
  }

  const imgProfile = "http://localhost:8080" + data.img;
  console.log(imgProfile);
  //TODO SI LE TEMPS FAIRE UNE TERNAIRE QUI AFFICHE LE FORMULAIRE EDIT CREER UN COMPONENT , QUAND ON CLIQUE SUR LE BOUTON EDIT ET CHANGER AVEC UNE CROIX
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
        <img className={style.btnEditProfile} src={edit} alt="edit icon" onClick={handleToggleEdit} />
      </div>
    </>
  );
};
export default ProfileHeader;
