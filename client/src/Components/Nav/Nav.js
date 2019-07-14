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
            
            <Button
              content={props.username}
              icon='user circle'
              label={{ as: 'a', basic: true, content: 'Logout' }}
              labelPosition='right'
              onClick={logout}
            />  
        </div>
      </nav>
    );
}
 
export default Nav;