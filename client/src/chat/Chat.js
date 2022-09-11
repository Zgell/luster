/*
Represents the login page of the application.
*/
import React from 'react';
import './Chat.css';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Chat = () => {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the Chat Page</p>
        <Link to="/">Click here to go to the main page</Link>
        <Link to="/login">Click here to go to the login page</Link>
        <Link to="/match">Click here to go to the matchmaking page</Link>
        </header>
      </div>
    );
  }
  
export default Chat;