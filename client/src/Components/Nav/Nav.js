import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Icon, Menu} from 'semantic-ui-react';

const Nav = props => {
  const [activeItem, setActiveItem] = useState('Home');

  return ( 
      <Menu inverted stackable>
        <Container>
          <Menu.Item header>
            <Icon name='food' />
            ultimateRecipes
          </Menu.Item>
          <NavLink exact to="/">
            <Menu.Item as='div' name='Home' active={activeItem === 'Home'} onClick={(e, data) => tabClick(data)} />
          </NavLink>
          {props.loggedin && 
            <NavLink to="/shopping-list">
              <Menu.Item as='div' name='Shopping-List' active={activeItem === 'Shopping-List'} onClick={(e, data) => tabClick(data)} />
            </NavLink> 
          }
          <NavLink to="/recipes">
            <Menu.Item as='div' name='Recipes' active={activeItem === 'Recipes'} onClick={(e, data) => tabClick(data)} />
          </NavLink>
          {props.loggedin && 
            <NavLink exact to="/">
              <Menu.Item as='div' name='logout' onClick={props.logout} />
            </NavLink>
          }
        </Container>
      </Menu>
  );

  function tabClick(data) {
    console.log(data)
    setActiveItem(data.name);
  }
}
 
export default Nav;