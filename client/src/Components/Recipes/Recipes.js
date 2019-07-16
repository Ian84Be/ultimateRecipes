import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button,Card, Icon} from 'semantic-ui-react';

const Recipes = (props) => {
    return ( 
        <Card.Group>
        <NavLink exact to="/recipes/add">
            <Button basic color='green' content='Add a New Recipe!'/>
        </NavLink>
            {props.recipeData.map(r => {
                return (
                    <NavLink key={r.title} to={'/recipes/card/'+r.id}>
                    <Card>
                        <Card.Content>
                            <Card.Header>{r.title}</Card.Header>
                            <Card.Meta>${r.cost} / {r.servings} servings</Card.Meta>
                            <Card.Description>
                                <Icon name='star'/>
                                5 Stars
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    </NavLink>
                )
            })}
        </Card.Group>
    );
}
 
export default Recipes;