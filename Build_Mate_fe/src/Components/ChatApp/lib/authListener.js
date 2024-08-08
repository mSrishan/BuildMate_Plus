// D:\Projects\Chat-Window\ChatUsingFireBase\react-firebase-chat\src\lib\authListener.js
import { auth, db } from './firebase';
import { doc, updateDoc } from "firebase/firestore";

auth.onAuthStateChanged(async (user) => {
  if (user) {
    const userDocRef = doc(db, "users", user.uid);
    await updateDoc(userDocRef, {
      lastSeen: new Date()
    });

    window.addEventListener("beforeunload", async () => {
      await updateDoc(userDocRef, {
        lastSeen: new Date()
      });
    });
  }
});
