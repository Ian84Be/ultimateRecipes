import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Dashboard from './Components/Dashboard/Dashboard';
import Recipes from './Components/Recipes/Recipes';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>

      <main>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/shopping-list" component={ShoppingList}/>
        <Route exact path="/recipes" component={Recipes}/>
      </main>
    </div>
  );
}

export default App;
