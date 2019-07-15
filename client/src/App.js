import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';


import Nav from './Components/Nav/Nav';
import Dashboard from './Components/Dashboard/Dashboard';
import AddRecipe from './Components/Recipes/AddRecipe';
import Recipes from './Components/Recipes/Recipes';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import LandingPage from './Components/LandingPage/LandingPage';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem('token');
        return options;
        },
    function(error) {
        // do something with the error
        return Promise.reject(error);
    }
);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [myUsername, setMyUsername] = useState('');
  const [myList, setMyList] = useState([]);
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedIn(true)
      setMyUsername(localStorage.getItem('username'))
    }
    axios.get('/recipes')
      .then(res => setRecipeData(res.data))
      .catch(err => console.log(err)) 
  },[])

  console.log(recipeData)

  return (
    <div className="App">
      <header>
        <Nav 
          loggedin={loggedIn}
          logout={logout} 
          username={myUsername}
        />
      </header>

      <main>
        {loggedIn ?
          <Route exact path="/" render={props => 
            <Dashboard {...props} myList={myList} username={myUsername} />} 
          /> :
          <Route exact path="/" render={props => 
            <LandingPage {...props} userCreate={userCreate} userLogin={userLogin}
          />}/>
        }
        
        <Route exact path="/shopping-list" render={props => 
          <ShoppingList {...props} myList={myList} username={myUsername}/>} 
        />
        <Route path="/recipes" render={props => 
          <Recipes {...props} recipeData={recipeData} />}
        />
        <Route path="/recipes/add" component={AddRecipe}/>
      </main>
    </div>
  );

  function userCreate (e,username,password) {
    e.preventDefault();
    axios.post('/auth/register', {username,password})
        .then(res => {
          setMyUsername(res.data.username);
          setLoggedIn(true);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
        })
        .catch(err => console.log(err))
  }

  function userLogin (e,username,password) {
    e.preventDefault();
    axios.post('/auth/login', {username,password})
        .then(res => {
          setMyUsername(res.data.username);
          setLoggedIn(true);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
        })
        .then(()=> getShopList())
        .catch(err => console.log(err))
  }

  function getShopList() {
    axios.get(`/users/list/${myUsername}`)
    .then(res => {
        console.log(res.data);
        let shopList = res.data.shopping_list.split(',');
        setMyList(shopList);
    })
    .catch(err => console.log(err))
  }

  function logout() {
    localStorage.clear();
    setLoggedIn(false);
  }
}

export default App;
