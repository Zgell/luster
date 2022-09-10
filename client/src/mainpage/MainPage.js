/*
Represents the main landing page of the application.
*/
import './MainPage.css';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const MainPage = () => {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Welcome to the Main Page</p>
      <Link to="/login">Click here to go to the login page</Link>
      <Link to="/chat">Click here to go to the chat page</Link>
      <Link to="/match">Click here to go to the matchmaking page</Link>
      </header>
    </div>
  );
}

export default MainPage;