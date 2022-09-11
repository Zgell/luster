/*
Represents the main landing page of the application.
*/
import '../template/main.css'
import '../template/w3.css'
import './MainPage.css';

import { Link } from 'react-router-dom';
import logo from '../logo.svg';

/*
<div className="App">
  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>Welcome to the Main Page</p>
  <Link to="/login">Click here to go to the login page</Link>
  <Link to="/chat">Click here to go to the chat page</Link>
  <Link to="/match">Click here to go to the matchmaking page</Link>
  </header>
</div>
*/

/*
<div className="bgimg w3-display-container animate-gradient-opacity w3-text-white">
    <div className="top-left-corner-title">
        Dating App
    </div>
    <div className ="w3-center">
        <h1 className="primary-title">DATING APP</h1>
        <hr className="w3-border-white primary-divider" />
        <p className="primary-subtitle w3-center">Join now to find the love of your life.</p>
        <div className="w3-center">
            <button className="rounded-button w3-xlarge w3-round-xxlarge">Sign Up</button>
            <button className="rounded-button w3-xlarge w3-round-xxlarge">Log In</button>
        </div>
    </div>
</div>
*/
//const BGIMG = {
//  background: "linear-gradient(120deg, rgba(241,67,9,1) 0%, rgba(241,9,9,1) 45%, rgba(217,93,143,1) 85%, rgba(217,93,202,1) 100%)",
// minHeight: "100%",
//  backgroundPosition: "center",
//  backgroundSize: "cover",

//  position: "relative",
  // animation:opac 1.6s}@keyframes opac{from{opacity:0} to{opacity:1}
//  color: "#ffffff",
//}

//const TOP_LEFT_CORNER_TITLE = {
  /*
  font-family: 'Josefin Sans', sans-serif;
    font-size: 32px;
    padding: 12px 24px !important;
    position: absolute;
    left: 0;
    top: 0;
  */
//  fontFamily: "J"
//}

// function Bgimg(props) {
//   return <div style={
//     { 
//       background: "linear-gradient(120deg, rgba(241,67,9,1) 0%, rgba(241,9,9,1) 45%, rgba(217,93,143,1) 85%, rgba(217,93,202,1) 100%)",
//       // background: "green",
//       minHeight: "100%",
//       backgroundPosition: "center",
//       backgroundSize: "cover"
//     }
//   }>
//     <p>Hello!</p>
//   </div>;
// }

const MainPage = () => {
  return (
    // <div className={[styles.bgimg, w3styles['w3-display-container'], w3styles['animate-gradient-opacity'], w3styles['w3-text-white']]}>
    <div className="bgimg w3-display-container animate-gradient-opacity w3-text-white display-middle-container">
      <div className="top-left-corner-title">
          Dating App
      </div>
      <div className ="w3-center display-middle">
        <h1 className="primary-title">DATING APP</h1>
        <hr className="w3-border-white primary-divider" />
        <p className="primary-subtitle w3-center">Join now to find the love of your life.</p>
        <div className="w3-center">
          <button className="rounded-button w3-xlarge w3-round-xxlarge">Sign Up</button>
          <button className="rounded-button w3-xlarge w3-round-xxlarge">Log In</button>
        </div>
      </div>
    </div>
/*
    <div class="bgimg w3-display-container animate-gradient-opacity w3-text-white">
      <div class="top-left-corner-title">
          Dating App
      </div>
      <div class="w3-display-middle">
          <h1 class="primary-title">DATING APP</h1>
          <hr class="w3-border-white" style="margin:auto;width:40%">
          <p class="primary-subtitle w3-center">Join now to find the love of your life.</p>
          <div class="w3-center">
              <button class="rounded-button w3-xlarge w3-round-xxlarge">Sign Up</button>
              <button class="rounded-button w3-xlarge w3-round-xxlarge">Log In</button>
          </div>
      </div>
    </div>
    */
  );
}

export default MainPage;