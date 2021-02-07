import React, { useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen' 
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profiles from './screens/Profiles';
import Footer from './Footer';
function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      }else{
        // logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch])
  return (
    <div className="app">
      <Router>
        {!user?(
          <LoginScreen/>
        ):(
          <Switch>
            <Route path="/profiles">
              <Profiles />
            </Route>
            <Route path="/profile">
              <ProfileScreen/>
            </Route>
            <Route exact path="/">
              <HomeScreen/>       
            </Route>
        </Switch>
        )}
      </Router>
      <Footer/>  
    </div>
  );
}

export default App;
