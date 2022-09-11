import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './mainpage/MainPage';
import Login from './login/Login';
import Chat from './chat/Chat';
import Match from './match/Match'
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAxmc2jNPQwGZXW0OD2bsFzTHR5K3USwDM",

  authDomain: "slayqueen-3cd46.firebaseapp.com",

  projectId: "slayqueen-3cd46",

  storageBucket: "slayqueen-3cd46.appspot.com",

  messagingSenderId: "1081722428055",

  appId: "1:1081722428055:web:ff86ea6c5364c983e367d2",

  measurementId: "G-JVGNXSN4HR"

})

const auth = firebase.auth();
const firestore = firebase.firestore();

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

  const [user] = useAuthState(auth);
   
  return (
    <div className="App">
      <section>
        {user ? <ChatRoom /> : <SignIn />} 
      </section>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="login" element={<Login/>} />
        <Route path="chat" element={<Chat/>} />
        <Route path="match" element={<Match/>} />
      </Routes>
    </div>
  );
}

// {user ? <ChatRoom /> : <SignIn />} - basically means that if there is a user signed in take the user to the Chat Room. But if the user is 
// not signed in take the user to the sign in page.

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider(); // This is only available if we are storing our data in the firebase
    // So we can just ignore this and then make our own version of this
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() { 

  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>  
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25); // order by the time and limit by 25
  // Why are we limiting by 25?

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormaValue] = useState('');

return (<>
  <main>
    {messages && messages.map(msg => 
      <ChatMessage key={msg.id} message={msg} />)}

    <span ref={dummy}></span>
  </main>

    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>

      <button type = "submit">🕊</button>
    </form>
  </>)
}

function ChatMessage(props) {
  const {text, uid, photoURL} = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className = {'message ${messageClass}'}>
      <img src = {photoURL} />
      <p>{text}</p>
    </div>
  )
}

export default App;
