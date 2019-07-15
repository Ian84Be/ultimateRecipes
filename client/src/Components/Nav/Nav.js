import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

const Nav = props => {
  return ( 
    <nav>
      <div className="left">
          <div className="logo">ultimateRecipes</div>
      </div>

      <div className="right">
          <NavLink exact to="/">home</NavLink>
          {props.loggedin && <NavLink to="/shopping-list">shopping-list</NavLink>}
          <NavLink to="/recipes">recipes</NavLink>

          <Button animated onClick={props.logout}>
            <Button.Content visible>{props.username}</Button.Content>
            <Button.Content hidden>Logout</Button.Content>
          </Button>
      </div>
    </nav>
  );
}
 
export default Nav;