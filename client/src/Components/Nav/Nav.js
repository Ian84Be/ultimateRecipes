import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = props => {
    return ( 
      <nav>
        <div className="left">
        <NavLink to="/">
            <div className="logo">ultimateRecipes</div>
        </NavLink>
        </div>

        <div className="right">
            <NavLink to="/">home</NavLink>
            <NavLink to="/shopping-list">shopping-list</NavLink>
            <NavLink to="/recipes">recipes</NavLink>
        </div>
      </nav>
    );
}
 
export default Nav;