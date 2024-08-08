import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";
import avatarImage from "../../../public/avatar.png";  // Adjusted path

const UserInfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || avatarImage} alt="User Avatar" />
        <h2>{currentUser.username}</h2>
      </div>
    </div>
  );
};

export default UserInfo;
