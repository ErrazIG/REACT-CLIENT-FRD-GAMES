import style from './homePage.module.css';
import OIG1 from '../../assets/OIG1.png';
const HomePage = () => {

    return (
        <>
            <div className={style.mainContentHeader}>
                <div className={style.mainContentHeaderText}>
                    <h2 className={style.mainContentHeaderTextTitle}>
                        Ready, set, game on!
                    </h2>
                    <p className={style.mainContentHeaderTextDesc}>
                        FRD GAMES  is a dynamic gaming platform where players clash, connect, and create lasting friendships through a shared love for video games
                    </p>
                </div>
                <img
                    alt=""
                    className={style.mainContentHeaderImg}
                    src={OIG1}
                />
            </div>
            <div className={style.lineHeader}></div>
            <div className={style.mainContentFeaturedGame}>
                <h2 className={style.mainContentFeaturedGameTitle}>
                    Featured Game
                </h2>
                <div className={style.featuredGames}>
                    <div className={style.featuredGame}>
                        
                    </div>
                    <div className={style.featuredGame}>

                    </div>
                </div>
            </div>
        </>
    );
}
export default HomePage;