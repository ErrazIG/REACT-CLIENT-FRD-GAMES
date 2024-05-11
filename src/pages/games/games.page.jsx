import axios from "axios";
import style from "./gamesPage.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const GamesPage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/games").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <>
      <div className={style.mainGameContent}>
        <h1 className={style.mainContentGameTitle}>List Games</h1>
        <div className={style.gameList}>
          {data &&
            data.map(({ id, img, name, description }) => {
              const imgGame = "http://localhost:8080" + img;
              return (
                <Link className="gameLink" to={`/games/${id}`}>
                  <div className={style.gameCard}>
                    <img className={style.gameImg} src={imgGame} alt="" />
                    <h2 className={style.gameTitle}>{name}</h2>
                    <p className={style.gameDesc}>{description}</p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default GamesPage;
