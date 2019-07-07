import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = props => {
    return ( 
      <nav>
        <div className="left">
            <div className="logo">ultimateRecipes</div>
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