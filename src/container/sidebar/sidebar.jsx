import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import profile from '../../assets/links/icons8-user-50.png'
import friends from '../../assets/links/icons8-users-50.png'
import messages from '../../assets/links/icons8-sms-50.png'
import games from '../../assets/links/icons8-games-50.png'
import leaderboards from '../../assets/links/icons8-prize-50.png'
import tournaments from '../../assets/links/icons8-shield-50.png'
import style from './sidebar.module.css'
import { IoMdClose } from "react-icons/io";
import ThemeToggle from '../../components/theme-toggle/theme-toggle';

const Sidebar = () => {

    const logoLinkClasses = `${style.sidebarLogos} ${style.navChildContainer}`;

    return (
        <>
            <nav className={style.sidebar}>
                <IoMdClose className='closeNav' />

                <Link className={logoLinkClasses} to="/">
                    <img className={style.sidebarLogoImg} src={logo} alt="" />
                    <span>FRD GAMES</span>
                </Link>
                <div className={style.navChildContainer}>
                    <ul className={style.sidebarLinks}>
                        <Link className={style.sidebarLink} to="/profile">
                            <img className={style.sidebarIcon} src={profile} alt="" />
                            <span className={style.sidebarText}>Profile</span>
                        </Link>
                        <Link className={style.sidebarLink} to="/friends">
                            <img className={style.sidebarIcon} src={friends} alt="" />
                            <span className={style.sidebarText}>Friends</span>
                        </Link>
                        <Link className={style.sidebarLink} to="/messages">
                            <img className={style.sidebarIcon} src={messages} alt="" />
                            <span className={style.sidebarText}>Messages</span>
                        </Link>
                        <div className="line"></div>
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
                <div className={style.navChildContainer}>
                    <ThemeToggle />
                </div>

                <div className={style.navChildContainer}>
                    <ul className={style.sidebarLinks}>
                        <Link className={style.sidebarHelpLink}>
                            <img src="" alt="" />
                            <span>Help</span>
                        </Link>
                        <Link className={style.sidebarHelpLink}>
                            <img src="" alt="" />
                            <span>Conditions</span>
                        </Link>
                        <Link className={style.sidebarHelpLink}>
                            <img src="" alt="" />
                            <span>Confidentiality</span>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Sidebar;