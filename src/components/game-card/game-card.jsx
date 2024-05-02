const GameCard = () => {

    return (
        <>
            <div className={style.gameCardInfo}>
                <img
                    alt=""
                    className="game-card-img"
                    src={gameCardImg}
                />
                <div className={style.gameCardTextInfo}>
                    <h3 className={style.gameCardTitle}>
                        {gameCardTitle}
                    </h3>
                    <p className="game-card-desc">
                        {gameCardDescription}
                    </p>
                    <span className="game-card-tag">
                        {gameCardCategory}
                    </span>
                </div>
            </div>
        </>
    );
}