import "./addUser.css";
import { collection, doc, getDocs, query, setDoc, where, serverTimestamp, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { useState } from "react";
import { useUserStore } from "../../../../lib/userStore";
import avatarImage from '../../../../public/avatar.png';

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setUser(querySnapshot.docs[0].data());
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Error searching for user:", err);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatRef = collection(db, "userchats");

    try {
      // Create a new chat document
      const newChatRef = doc(chatRef);

      // Set the initial chat data
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      const userChatDocRef = doc(userChatRef, user.id);
      const currentUserChatDocRef = doc(userChatRef, currentUser.id);

      const userChatDoc = await getDoc(userChatDocRef);
      const currentUserChatDoc = await getDoc(currentUserChatDocRef);

      if (!userChatDoc.exists()) {
        await setDoc(userChatDocRef, { chats: [] });
      }
      if (!currentUserChatDoc.exists()) {
        await setDoc(currentUserChatDocRef, { chats: [] });
      }

      await updateDoc(userChatDocRef, {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(currentUserChatDocRef, {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });

    } catch (err) {
      console.error("Error adding user:", err);
    }
  };
  

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Username" 
          name="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Search</button>
      </form>
      {user && (
        <div className="User">
          <div className="Detail">
            <img src={user.avatar || avatarImage} alt="User avatar" />
            <span>{user.username}</span>
          </div>
          <button onClick={handleAdd}>Add User</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
