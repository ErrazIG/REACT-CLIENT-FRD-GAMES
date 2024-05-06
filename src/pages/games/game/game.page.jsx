import { useEffect } from "react";
import style from "./gamePage.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const GamePage = () => {
    const { id } = useParams();
    console.log("l'id de l'url: ", id);
    useEffect(()=> {
        axios.get(`http://localhost:8080/api/games/${id}`)
    })

    return (
        <>
        <div className={style.mainContentGamePage}>
            <h2>Titre du jeu</h2>
            <div className={style.gameWindow}>
                
            </div>
            <div className={style.rulesGames}>
                
                <div className={style.ruleContent}>
                    <h2>Rule 1</h2>
                    <h3>Direction</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, quasi itaque.</p>
                    <h2>Rule 2</h2>
                    <h3>Quests</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa!</p>
                </div>
                <div className={style.ruleContent}>
                    <h2>Rule 3</h2>
                    <h3>Inventory</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vero praesentium incidunt sunt!</p>
                    <h2>Lore</h2>
                    <h3>The story of </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, tempora.</p>
                </div>
                
            </div>
        </div>
        </>
    );
}
export default GamePage;