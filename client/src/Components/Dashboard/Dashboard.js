import React from 'react';
import {NavLink} from 'react-router-dom';
import {Message} from 'semantic-ui-react';

const Dashboard = (props) => {
    return ( 
      <NavLink to="/shopping-list">
      <Message
        icon='inbox'
        header={`Good Morning, ${props.username}!`}
        content={`You have ${props.myList.length} items on your shopping-list`}
      />
      </NavLink>
    );
}

export default Dashboard;