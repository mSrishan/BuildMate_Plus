import { create } from 'zustand';
import { doc, getDoc } from "firebase/firestore"; // Add this import
import { useUserStore } from './userStore';
import { db } from './firebase'; // Make sure to import your Firebase configuration

export const useChatStore = create((set) => ({
  chat: null,
  chatId: null,
  user: null,
  lastSeen: null, // Add lastSeen state
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  img: { file: null, url: "" },

  changeChat: async (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;

    // Fetch last seen information from the database
    const userDoc = await getDoc(doc(db, "users", user.id));
    const lastSeen = userDoc.exists() ? userDoc.data().lastSeen : null;

    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        lastSeen,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      });
    } else if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user,
        lastSeen,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
      });
    } else {
      // No block conditions
      return set({
        chatId,
        user,
        lastSeen,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
      });
    }
  },

  setImg: (img) => set({ img }),

  changeBlock: () => {
    set(state => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }));
  },
}));
