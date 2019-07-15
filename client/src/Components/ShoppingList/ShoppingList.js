import React from 'react';

const ShoppingList = (props) => {
    return ( 
        <div className="ShoppingList">
            this is the ShoppingList component
            <ul>
                {props.myList.map(item => <li key={item}>{item}</li> )}
            </ul>
        </div>
     );
}
 
export default ShoppingList;