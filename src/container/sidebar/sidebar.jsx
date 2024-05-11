import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import profile from "../../assets/links/icons8-user-50.png";
import friends from "../../assets/links/icons8-users-50.png";
import messages from "../../assets/links/icons8-sms-50.png";
import games from "../../assets/links/icons8-games-50.png";
import leaderboards from "../../assets/links/icons8-prize-50.png";
import tournaments from "../../assets/links/icons8-shield-50.png";
import help from "../../assets/links/icons8-online-support-50.png";
import conditions from "../../assets/links/icons8-about-50.png";
import confidentiality from "../../assets/links/icons8-ask-question-50.png";

import twitter from "../../assets/links/icons8-twitterx-50.png";
import youtube from "../../assets/links/icons8-youtube-50.png";
import discord from "../../assets/links/icons8-discord-50.png";

import style from "./sidebar.module.css";
import { useRecoilValue } from "recoil";
import { tokenAtom } from "../../atoms/token.atom.js";

const Sidebar = () => {
  const token = useRecoilValue(tokenAtom);
  const logoLinkClasses = `${style.sidebarLogos} ${style.navChildContainer}`;

  return (
    <>
      <nav className={style.sidebar}>
        <Link className={logoLinkClasses} to="/">
          <img className={style.sidebarLogoImg} src={logo} alt="" />
          <span>FRD GAMES</span>
        </Link>

        <div className={style.navChildContainer}>
          <ul className={style.sidebarLinks}>
            {!!token ? (
              <>
                <Link
                  className={style.sidebarLink}
                  to={`/profile/${token.username}`}
                >
                  <img className={style.sidebarIcon} src={profile} alt="" />
                  <span className={style.sidebarText}>Profile</span>
                </Link>
                <Link className={style.sidebarLink} to={`/friends/${token.username}`}>
                  <img className={style.sidebarIcon} src={friends} alt="" />
                  <span className={style.sidebarText}>Friends</span>
                </Link>
                <Link className={style.sidebarLink} to={`/chat/${token.username}`}>
                  <img className={style.sidebarIcon} src={messages} alt="" />
                  <span className={style.sidebarText}>Chat</span>
                </Link>
                <div className="line"></div>
              </>
            ) : (
              <></>
            )}
            <Link className={style.sidebarLink} to="/games">
              <img className={style.sidebarIcon} src={games} alt="" />
              <span className={style.sidebarText}>Games</span>
            </Link>
            <Link className={style.sidebarLink} to="/leaderboards">
              <img className={style.sidebarIcon} src={leaderboards} alt="" />
              <span className={style.sidebarText}>Leaderboards</span>
            </Link>
            <Link className={style.sidebarLink} to="/tournaments">
              <img className={style.sidebarIcon} src={tournaments} alt="" />
              <span className={style.sidebarText}>Tournaments</span>
            </Link>
          </ul>
        </div>

        <div className={style.navChildContainer}></div>

        <div className={style.navChildContainer}>
          <ul className={style.sidebarLinks}>
            <Link className={style.sidebarLink} to="/help">
              <img className={style.sidebarIcon} src={help} alt="" />
              <span className={style.sidebarText}>Help</span>
            </Link>
            <Link className={style.sidebarLink} to="/conditions">
              <img className={style.sidebarIcon} src={conditions} alt="" />
              <span className={style.sidebarText}>Conditions</span>
            </Link>
            <Link className={style.sidebarLink} to="/confidentiality">
              <img className={style.sidebarIcon} src={confidentiality} alt="" />
              <span className={style.sidebarText}>Confidentiality</span>
            </Link>
          </ul>
          <div className={style.sidebarSocials}>
            <Link className={style.sidebarSocial}>
              <img className={style.sidebarSocialImg} src={twitter} alt="" />
            </Link>
            <Link className={style.sidebarSocial}>
              <img className={style.sidebarSocialImg} src={youtube} alt="" />
            </Link>
            <Link className={style.sidebarSocial}>
              <img className={style.sidebarSocialImg} src={discord} alt="" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Sidebar;
