import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Home from './Home';
import Signin from './Signin';
import { auth } from './firebase';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Profile from './Profile';
import Explore from './Explore';
import Notifications from './Notifications';

function App() {

  

  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  return (
    <Router>
    <div className="app">
      <Switch>
      <Route exact path="/">
     {user ? <Home /> : <Signin />}
     </Route>
     <Route path="/profile">
     {user ? <Profile /> : <Signin />}
     </Route>
     <Route path="/explore">
     {user ? <Explore /> : <Signin />}
     </Route>
     <Route path="/notifications">
     {user ? <Notifications /> : <Signin />}
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
