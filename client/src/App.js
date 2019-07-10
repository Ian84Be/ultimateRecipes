import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import Nav from './Components/Nav/Nav';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Recipes from './Components/Recipes/Recipes';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import './App.scss';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [myUsername, setMyUsername] = useState('');
  // useEffect(() => {
  //   let username = localStorage.getItem('username');
  //   if (username !== '') setLoggedIn(username)
  // }, [loggedIn]);

  const userLogin = (e,username,password) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', {username,password})
        .then(res => {
          setMyUsername(res.data.username);
          setLoggedIn(true);
          localStorage.setItem('token', res.data.token);
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
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/shopping-list" component={ShoppingList}/>
          <Route path="/recipes" component={Recipes}/>
          </>
        )}
        {!loggedIn && <Login userLogin={userLogin} />}
      </main>
    </div>
  );
}

export default App;
