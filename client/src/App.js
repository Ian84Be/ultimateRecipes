import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {Tab} from 'semantic-ui-react';

import Nav from './Components/Nav/Nav';
import Dashboard from './Components/Dashboard/Dashboard';
import AddRecipe from './Components/Recipes/AddRecipe';
import Recipes from './Components/Recipes/Recipes';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import LandingPage from './Components/LandingPage/LandingPage';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [myUsername, setMyUsername] = useState('');
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedIn(true)
      setMyUsername(localStorage.getItem('username'))
    } 
  },[])

  const userCreate = (e,username,password) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/register', {username,password})
        .then(res => {
          setMyUsername(res.data.username);
          setLoggedIn(true);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
        })
        .catch(err => console.log(err))
  }

  const userLogin = (e,username,password) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', {username,password})
        .then(res => {
          setMyUsername(res.data.username);
          setLoggedIn(true);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
        })
        .catch(err => console.log(err))
  }

  return (
    <div className="App">
      
      <header>
        {loggedIn ? (<Nav username={myUsername}/>) : ( <div>Login / Sign-up</div> )}
      </header>

      <main>
        {loggedIn && (
          <>
          <Route exact path="/" render={props => <Dashboard {...props} username={myUsername} />} />
          <Route exact path="/shopping-list" render={props => <ShoppingList {...props} username={myUsername}/>} />
          <Route path="/recipes" component={Recipes}/>
          <Route path="/recipes/add" component={AddRecipe}/>
          </>
        )}
        {!loggedIn && (
          <>
          <Route path="/" render={props => <LandingPage {...props} userCreate={userCreate} userLogin={userLogin} />}/>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
