import ProfileHeader from "../../components/profile-header/profile-header.jsx";
import ProfileLeaderboards from "../../components/profile-leaderboards/profile-leaderboards.jsx";
import style from "./profile.module.css";

const ProfilePage = () => {
  return (
    <>
      <div className={style.mainContentUserProfile}>
        <ProfileHeader />
        <div className="line"></div>
        <ProfileLeaderboards />
      </div>
    </>
  );
};
export default ProfilePage;
