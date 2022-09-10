/*
Represents the login page of the application.
*/
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Login = () => {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the Login Page</p>
        <Link to="/">Click here to go to the main page</Link>
        </header>
      </div>
    );
  }
  
export default Login;