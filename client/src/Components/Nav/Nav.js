import React, {useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

const Nav = props => {
  const [loggedIn, setLoggedIn] = useState(true);
  function logout() {
    localStorage.clear();
    setLoggedIn(false);
  }
    if (!loggedIn) return <Redirect to="/" />

    else return ( 
      <nav>
        <div className="left">
            <div className="logo">ultimateRecipes</div>
        </div>

        <div className="right">
            <NavLink exact to="/">home</NavLink>
            <NavLink to="/shopping-list">shopping-list</NavLink>
            <NavLink to="/recipes">recipes</NavLink>

            <Button animated onClick={logout}>
              <Button.Content visible>{props.username}</Button.Content>
              <Button.Content hidden>Logout</Button.Content>
            </Button>
        </div>
      </nav>
    );
}
 
export default Nav;