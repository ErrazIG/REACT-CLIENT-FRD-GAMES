import style from "./homePage.module.css";
import OIG1 from "../../assets/OIG1.png";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/games/featured-games")
      .then((response) => {
        setData(response.data);
        console.log("LA RESPONSE : ", response.data);
      });
  }, []);
  return (
    <>
      <div className={style.mainContentHeader}>
        <div className={style.mainContentHeaderText}>
          <h2 className={style.mainContentHeaderTextTitle}>
            Ready, set, game on!
          </h2>
          <p className={style.mainContentHeaderTextDesc}>
            FRD GAMES is a dynamic gaming platform where players clash, connect,
            and create lasting friendships through a shared love for video games
          </p>
        </div>
        <img alt="" className={style.mainContentHeaderImg} src={OIG1} />
      </div>
      <div className={style.lineHeader}></div>
      <div className={style.mainContentFeaturedGame}>
        <h2 className={style.mainContentFeaturedGameTitle}>Featured Game</h2>
        <div className={style.featuredGames}>
          {data &&
            data.map(({id, img, name, description }) => {
              const imgGame = "http://localhost:8080" + img;
              return (
                <>
                  <Link className="gameLink" to={`/games/${id}`}>
                    <div className={`${style.featuredGame} ${style.gameCard} `}>
                      <img
                        className={style.featuredGameImg}
                        src={imgGame}
                        alt=""
                      />
                      <h2 className={style.featuredGameTitle}>{name}</h2>
                      <p className={style.featuredGameDesc}>{description}</p>
                    </div>
                  </Link>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default HomePage;
