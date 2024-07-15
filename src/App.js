import React, { useState, useEffect } from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import './App.css';
import Login from './login-components/login';
import Main from './Main';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem('user', JSON.stringify(currentUser));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      console.log(user);
      setUser(user);
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
  }

  return (
    <div className="App">
      {user ? (
        <> 
        <Main user={user} Logout={handleLogout} />
        </>
      ) : (
        <> <Login signin={handleGoogleSignIn}/> </>
      )}
    </div>
  );
}

export default App;