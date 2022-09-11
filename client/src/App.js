import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './mainpage/MainPage';
import Login from './login/Login';
import Chat from './chat/Chat';
import Match from './match/Match'
import './App.css';

function App() {
  const [data, setData] = React.useState(null) // States are used for default values to be rendered

  // UserID
  // Email
  // Password
  // First Name, Last Name
  // NickName
  // Phone # 
  // Gender
  // Sexuality
  // Profile Picture
  // Age

  // React is used to call a function as soon as the page loads
  // should do more research on it tho.

  React.useEffect(() => {
    fetch("/api", {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        title: 'This is a title',
        subtitle: 'This is the subtitle!'
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  // Use the fetch in a function
  
  /*
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>{!data ? "Loading..." : data}</p>
  </header>
  */

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="login" element={<Login/>} />
        <Route path="chat" element={<Chat/>} />
        <Route path="match" element={<Match/>} />
      </Routes>
    </div>
  );
}

export default App;
