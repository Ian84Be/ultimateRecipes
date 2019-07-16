import React from 'react';
import {Card, List} from 'semantic-ui-react';

const ShoppingList = (props) => {
    return ( 
        <Card>
            <Card.Content>
                <Card.Header>Shopping List</Card.Header>
                <List>
                {props.myList.map(item => 
                    <List.Item icon='checkmark box' key={item} content={item} />
                )}
                </List>
            </Card.Content>
        </Card>
     );
}
 
export default ShoppingList;