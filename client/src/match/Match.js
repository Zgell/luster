/*
Represents the matchmaking of the application.
*/
import '../template/main.css'
import '../template/w3.css'
import './Match.css';

import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import nopic from '../template/nopic.png'
import { useNavigate } from 'react-router';

/*
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Welcome to the Matchmaking Page</p>
      <Link to="/">Click here to go to the main page</Link>
      <Link to="/login">Click here to go to the login page</Link>
      <Link to="/chat">Click here to go to the chat page</Link>
      </header>
    </div>
*/

const Match = () => {
  let navigate = useNavigate();
  const onMatchButtonClick = () => {
    navigate('/chat');
  }
  return (
    <div className="bgimg w3-display-container animate-gradient-opacity w3-text-white">
      <h1 className="find-a-match-title">Find a Match</h1>
      <div className="w3-display-middle">
        <div className="w3-card-4">
          <div className="match-card-container">
            <h1 className="match-card-title">Title</h1>
          </div>
          <div className="match-card-container">
            <img src={nopic} class="w3-round match-card-image"/>
          </div>
          <div className="match-card-container">
            <p className="match-card-bio"><b>Bio</b></p>
            <p className="match-card-bio">
                This is just some sample text I invented to simulate multiple lines of bio text. 
                This is where people would write about their interests
                and preferences, as well as other stuff.
            </p>
          </div>
          <div className="match-card-container">
            <button className="rounded-button w3-xlarge w3-round-xxlarge" onClick={onMatchButtonClick}>Let's Chat!</button>
          </div>
          <button className="w3-button match-card-swipe-button w3-display-left">&#10094;</button>
          <button className="w3-button match-card-swipe-button w3-display-right">&#10095;</button>
        </div>
      </div>
    </div>
  );
}

export default Match;