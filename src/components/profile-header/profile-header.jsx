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
  const decodedToken = token ? jwtDecode(token) : null;

  //attention au useEffect bien revoir !!!!
  useEffect(() => {
    
    axios
      .get(`http://localhost:8080/api/member/${decodedToken.username}`)
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
  }, []);


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
      <div className="line" />

      {/* <div className="leaderboards">
          <div className="user-friends-leaderboard leaderboard">
            <h3 className="leaderboard-title">Friends Leaderboard</h3>
            <div className="leaderboard-rank-first">
              <img
                className="leaderboard-rank-img"
                src="assets/icons8-gold-medal-96.png"
                alt=""
              />
              <img
                className="leaderboard-user-img"
                src="https://randomuser.me/api/portraits/men/54.jpg"
                alt=""
              />
              <p className="leaderboard-usernames">Userh45g6f4h5f</p>
              <p className="leaderboard-score">3582</p>
            </div>
            <div className="leaderboard-rank-second">
              <img
                className="leaderboard-rank-img"
                src="assets/icons8-silver-medal-96.png"
                alt=""
              />
              <img
                className="leaderboard-user-img"
                src="https://randomuser.me/api/portraits/women/50.jpg"
                alt=""
              />
              <p className="leaderboard-usernames">User4h56df4h6</p>
              <p className="leaderboard-score">3357</p>
            </div>
            <div className="leaderboard-rank-third">
              <img
                className="leaderboard-rank-img"
                src="assets/icons8-bronze-medal-96.png"
                alt=""
              />
              <img
                className="leaderboard-user-img"
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt=""
              />
              <p className="leaderboard-usernames">Userg4s5hfr</p>
              <p className="leaderboard-score">2987</p>
            </div>
          </div>
          <div className="user-games-leaderboard leaderboard">
            <h3 className="leaderboard-title">Games Leaderboard</h3>
            <div className="leaderboard-rank-first">
              <img
                className="leaderboard-rank-img"
                src="assets/icons8-gold-medal-96.png"
                alt=""
              />
              <img
                className="leaderboard-game-img"
                src="assets/52626_game_games_play_tetris_icon.png"
                alt=""
              />
              <p className="leaderboard-usernames">Tetris</p>
              <p className="leaderboard-score">3582</p>
            </div>
            <div className="leaderboard-rank-second">
              <img
                className="leaderboard-rank-img"
                src="assets/icons8-silver-medal-96.png"
                alt=""
              />
              <img
                className="leaderboard-game-img"
                src="assets/simon_icon-1.webp"
                alt=""
              />
              <p className="leaderboard-usernames">Simon</p>
              <p className="leaderboard-score">3357</p>
            </div>
            <div className="leaderboard-rank-third">
              <img
                className="leaderboard-rank-img"
                src="assets/icons8-bronze-medal-96.png"
                alt=""
              />
              <img
                className="leaderboard-game-img"
                src="assets/256x256bb.jpg"
                alt=""
              />
              <p className="leaderboard-usernames">QG Quizz</p>
              <p className="leaderboard-score">2987</p>
            </div>
          </div>
        </div> */}
    </>
  );
};
export default ProfileHeader;
