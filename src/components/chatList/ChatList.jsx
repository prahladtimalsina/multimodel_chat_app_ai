import React from "react";
import "./chatList.css";
import { Link } from "react-router-dom";
const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">Dashboard</span>
      <Link to="/dashboard">Create a new Chat +</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">Dashboard</span>
      <div className="list">
        <Link to="/chat/1">Title Chat list</Link>
        <Link to="/chat/2">Title Chat list</Link>
        <Link to="/chat/3">Title Chat list</Link>
        <Link to="/chat/1">Title Chat list</Link>
        <Link to="/chat/2">Title Chat list</Link>
        <Link to="/chat/3">Title Chat list</Link>
        <Link to="/chat/1">Title Chat list</Link>
        <Link to="/chat/2">Title Chat list</Link>
        <Link to="/chat/3">Title Chat list</Link>
        <Link to="/chat/1">Title Chat list</Link>
        <Link to="/chat/2">Title Chat list</Link>
        <Link to="/chat/3">Title Chat list</Link>
        <Link to="/chat/1">Title Chat list</Link>
        <Link to="/chat/2">Title Chat list</Link>
        <Link to="/chat/3">Title Chat list</Link>
        <Link to="/chat/1">Title Chat list</Link>
        <Link to="/chat/2">Title Chat list</Link>
        <Link to="/chat/3">Title Chat list</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="vite.svg" alt="" />
        <div className="texts">
          <span>Upgrade to Pro</span>
          <span>
            Get unlimited access to all features and priority support.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
