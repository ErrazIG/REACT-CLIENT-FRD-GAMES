import { useEffect } from "react";
import style from "./profile-leaderboard.module.css";
import { useRecoilState } from "recoil";
import { tokenAtom } from "../../atoms/token.atom.js";
import { useState } from "react";
import axios from "axios";

const ProfileLeaderboards = () => {
  const [token, setToken] = useRecoilState(tokenAtom);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (token?.username) {
      axios
        .get(`http://localhost:8080/api/member/${token.username}/games/scores`)
        .then((response) => {
          setData(response.data);
        });
    }
  }, [token]);

  return (
    <>
      <div className={style.leaderboards}>
        <div className={`${style.profileGameLeaderboard} ${style.leaderboard}`}>
          <h3 className={style.leaderboardTitle}>Games Leaderboards</h3>
          <div className={style.leaderboardsItem}>
            {data &&
              data.map(({ name, bestScore, img }) => {
              const imgGame = "http://localhost:8080" + img;

                return (
                  <div className={style.leaderboardRow}>
                    <img className={style.leaderboardGameImg} src={imgGame} alt="" />
                    <p className={style.dataName}>{name}</p>
                    <p className={style.dataScore}>{bestScore}</p>
                  </div>
                );
              })}
          </div>
        </div>

        {/* <div
          className={`${style.profileFriendLeaderboard} ${style.leaderboard}`}
        >
          <h3 className={style.leaderboardTitle}>Friends Leaderboards</h3>
          <div></div>
        </div> */}
      </div>
    </>
  );
};
export default ProfileLeaderboards;
