import React from "react";
import "./list.css"; // Import CSS styles for List component
import UserInfo from "./userinfo/UserInfo"; // Import UserInfo component
import ChatList from "./chatList/ChatList"; // Import ChatList component

const List = () => {
    return (
        <div className="list">
            <UserInfo />
            <ChatList />
        </div>
    );
};

export default List;
