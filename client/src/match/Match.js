/*
Represents the matchmaking of the application.
*/
import './Match.css';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Match = () => {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Welcome to the Matchmaking Page</p>
      <Link to="/">Click here to go to the main page</Link>
      <Link to="/login">Click here to go to the login page</Link>
      <Link to="/chat">Click here to go to the chat page</Link>
      </header>
    </div>
  );
}

export default Match;