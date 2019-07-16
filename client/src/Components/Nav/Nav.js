import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Container, Icon, Menu} from 'semantic-ui-react';

const Nav = props => {
  const [activeItem, setActiveItem] = useState('Home');

  return ( 
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header>
            <Icon name='food' />
            ultimateRecipes
          </Menu.Item>
          <NavLink exact to="/">
            <Menu.Item as='div' name='Home' active={activeItem === 'Home'} onClick={tabClick} />
          </NavLink>
          {props.loggedin && 
            <NavLink to="/shopping-list">
              <Menu.Item as='div' name='Shopping-List' active={activeItem === 'Shopping-List'} onClick={tabClick} />
            </NavLink> 
          }
          <NavLink to="/recipes">
            <Menu.Item as='div' name='Recipes' active={activeItem === 'Recipes'} onClick={tabClick} />
          </NavLink>
          {props.loggedin && 
            <NavLink exact to="/">
              <Menu.Item as='div' name='logout' onClick={props.logout} />
            </NavLink>
          }
          {/* <Button compact size='mini' inverted content='logout' onClick={props.logout}/> */}
        </Container>
      </Menu>
  );

  function tabClick(e, data) {
    setActiveItem(data.name);
  }
}
 
export default Nav;