import React from 'react'
import { Link } from 'react-router-dom'
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="texts">
        <div className="logo">
          <img src="vite.svg" alt="" />
          <h1>AI Chat App</h1>
        </div>

        <div className="options">
          <div className="option">
            <img src="vite.svg" />
            <span>Create New Chat</span>
          </div>

          <div className="option">
            <img src="vite.svg" />
            <span>Analyze Images</span>
          </div>

          <div className="option">
            <img src="vite.svg" />
            <span>Snippets</span>
          </div>

          <div className="option">
            <img src="vite.svg" />
            <span>Generate Code</span>
          </div>

          <div className="option">
            <img src="vite.svg" />
            <span>Code Snippets</span>
          </div>

          <div className="option">
            <img src="vite.svg" />
            <span>Generate Code </span>
          </div>
        </div>
      </div>

      <div className="formContainer">
        <form action="">
          <input type="text" placeholder="Type your message here..." />
          <button>
            <img src="vite.svg" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard