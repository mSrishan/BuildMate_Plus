import React from "react";
import { toast } from "react-toastify";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { auth, db } from "../../lib/firebase";
import { doc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import "./Detail.css";
import moreImage from '../../public/more.png';
import videoImage from '../../public/video.png';
import editImage from '../../public/edit.png';
import avatarImage from '../../public/avatar.png';
import arrowDownImage from '../../public/arrowDown.png';
import downloadImage from '../../public/download.png';


const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);
    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="detail">
        <div className="icons">
                <img src={moreImage}alt=""/>
                <img src={videoImage} alt=""/>
                <img src={editImage} alt=""/>
            </div>
      <div className="user">
        <img src={user?.avatar || avatarImage} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src={arrowDownImage} alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src={avatarImage} alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src={downloadImage} alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src={avatarImage} alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src={downloadImage} alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src={avatarImage} alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src={downloadImage} alt="" className="icon" />
            </div>
          </div>
        </div>

        <button onClick={handleBlock}>
          {isCurrentUserBlocked ? "You are Blocked!" : isReceiverBlocked ? "User Blocked" : "Block User"}
        </button>
        <button className="logout" onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  );
};

export default Detail;
