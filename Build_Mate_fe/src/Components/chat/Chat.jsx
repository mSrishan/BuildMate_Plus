import { useEffect, useRef, useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import upload from "../../lib/upload";
import phoneImage from '../../public/phone.png';
import videoImage from '../../public/video.png';
import infoImage from '../../public/info.png';
import imgImage from '../../public/img.png';
import cameraImage from '../../public/camera.png';
import micImage from '../../public/mic.png';
import emojiImage from '../../public/emoji.png';


const Chat = () => {
  const [chat, setChat] = useState(null);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [lastSeen, setLastSeen] = useState(null);
  const { isCurrentUserBlocked, isReceiverBlocked } = useChatStore();
  const currentUser = useUserStore((state) => state.currentUser);
  const chatId = useChatStore((state) => state.chatId);
  const user = useChatStore((state) => state.user);
  const img = useChatStore((state) => state.img);
  const setImg = useChatStore((state) => state.setImg);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.messages]);

  useEffect(() => {
    const unSubChat = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    const unSubUser = onSnapshot(doc(db, "users", user.id), (res) => {
      if (res.exists()) {
        setLastSeen(res.data().lastSeen);
      }
    });

    return () => {
      unSubChat();
      unSubUser();
    };
  }, [chatId, user.id]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSend = async () => {
    if (text === "" && !img.file) return;

    let imgUrl = null;

    try {
      if (img.file) {
        imgUrl = await upload(img.file, 'chat_images');
      }
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }),
        }),
      });

      const userIDs = [currentUser.id, user.id];

      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex((c) => c.chatId === chatId);

          if (chatIndex !== -1) {
            userChatsData.chats[chatIndex].lastMessage = text || "Image";
            userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
            userChatsData.chats[chatIndex].updatedAt = Date.now();

            await updateDoc(userChatsRef, {
              chats: userChatsData.chats,
            });
          }
        }
      });
    } catch (err) {
      console.log(err);
    }

    setImg({
      file: null,
      url: "",
    });

    setText("");
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={user?.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{user?.username}</span>
            <p style={{color:'white'}}>{lastSeen ? `Last seen: ${new Date(lastSeen.seconds * 1000).toLocaleDateString()}` : 'Loading...'}</p>

          </div>
        </div>
        <div className="icons">
          <img src={phoneImage} alt="" />
          <img src={videoImage} alt="" />
          <img src={infoImage} alt="" />
        </div>
      </div>
      <div className="center">
        {chat?.messages?.map((message, index) => (
          <div className={message.senderId === currentUser?.id ? "message own" : "message"} key={message?.createdAt}>
            <div className="texts">
              {message.img && <img src={message.img} alt="message" className="message-img" />}
              
              {message.text && <p className="centerTexts">{message.text}</p>}
              
              <span className="timestamp">
                {new Date(message.createdAt.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

          </div>
        ))}
        {img.url && (
          <div className={"message own"}>
            <div className="texts">
              <img src={img.url} alt="" className="message-img" />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src={imgImage} alt="" />
          </label>
          <input type="file" id="file" style={{ display: "none" }} onChange={handleImg} />
          <img src={cameraImage} alt="" />
          <img src={micImage} alt="" />
        </div>
        <input
          className="bottomInput"
          type="text"
          placeholder={(isCurrentUserBlocked || isReceiverBlocked) ?"You cannot send a message" : "Type a message..."}
          onChange={(e) => setText(e.target.value)}
          value={text}
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        />
        <div className="emoji">
          <img
            src={emojiImage}
            alt=""
            onClick={() => setOpen((prev) => !prev)}
            className="emaojiImg"
          />
          {open && <EmojiPicker onEmojiClick={handleEmoji} />}
        </div>
        <button className="sendButton" onClick={handleSend} disabled={isCurrentUserBlocked || isReceiverBlocked}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
