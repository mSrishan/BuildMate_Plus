// src/Pages/Chat.js
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../Components/ChatWindow/ChatFeed';
import LoginForm from '../Components/ChatWindow/LoginForm';
import './Chat.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';

const Chat = () => {
    if (!localStorage.getItem('username')) {
        return <LoginForm />;
    }

    return (
        <>
            <Navbar />
            <ChatEngine
                height="100vh"
                projectID="44be4f6a-d74f-4995-812a-2e60b0b37b6b"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
            <Footer />
        </>
    );
};

export default Chat;
