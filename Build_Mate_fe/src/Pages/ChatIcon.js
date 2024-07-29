// src/Pages/ChatIcon.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import chatIcon from '../Components/Assets/Logo.png';

const ChatIcon = () => {
  const navigate = useNavigate();

  const handleChatIconClick = () => {
    navigate('../Components/ChatApp/App');
  };

  return (
    <div style={styles.chatIconContainer} onClick={handleChatIconClick}>
        <img src={chatIcon} alt="Chat Icon" style={styles.chatIcon} />
      
    </div>
  );
};

const styles = {
  chatIconContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
    zIndex: 1000,
    display: 'flex'
    
  },
  chatIcon: {
    width: '100px',
    height: '100px',
    padding: '5%'
    
  },
};

export default ChatIcon;
