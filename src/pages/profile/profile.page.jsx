import ProfileHeader from "../../components/profile-header/profile-header.jsx";
import style from "./profile.module.css";

const ProfilePage = () => {
  return (
    <>
      <div className={style.mainContentUserProfile}>
        <ProfileHeader />
      </div>
    </>
  );
};
export default ProfilePage;
