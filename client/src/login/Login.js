/*
Represents the login page of the application.
*/
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';


var usrname = "";
var passwrd = "";
const [data, setData] = React.useState(null) // States are used for default values to be rendered

const buttonClick = () => {

    fetch("/api", {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        username: usrname,
        password: passwrd
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => setData(data.message));
    navigate("/match");   
  }
const Login = () => {


  // need to assign values to usrname and passwrd so that when the Log in button is clicked it is passed to the backend.
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the Login Page</p>
        <Link to="/">Click here to go to the main page</Link>
        <Link to="/chat">Click here to go to the chat page</Link>
        <Link to="/match">Click here to go to the matchmaking page</Link>
        <button className="rounded-button w3-xlarge w3-round-xxlarge" onClick={buttonClick}>Log In</button>
        </header>
      </div>
    );
  }
  
export default Login;