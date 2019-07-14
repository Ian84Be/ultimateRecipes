import React from 'react';

const Dashboard = (props) => {
    return ( 
      <div className="dashboard">
        <p>Good Morning, {props.username}!</p>
        <p>You have 0 items on your shopping-list</p>
        <p>You have 0 pinned recipes</p>
      </div>
    );
}
 
export default Dashboard;