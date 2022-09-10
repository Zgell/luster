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

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
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
