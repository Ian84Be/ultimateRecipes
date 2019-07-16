import React from 'react';
import {Card, Icon, List} from 'semantic-ui-react';

const RecipeCard = (props) => {
    let thisId = Number(props.match.params.id)
    let r = props.recipeData.filter(r=>r.id===thisId)[0];
    console.log(r);

    return ( 
        <>
            {r && 
              <Card>
                <Card.Content>
                    <Card.Header style={{fontSize:'2rem'}}>{r.title}</Card.Header>
                    <Card.Meta>${r.cost} / {r.servings} servings</Card.Meta>
                    <List>
                        <List.Item icon='clock outline' content={`${r.prep_time}m prepTime`} />
                        <List.Item icon='clock' content={`${r.cook_time}m cookTime`} />
                    </List>
                </Card.Content>
                <Card.Content>
                    <Card.Header>Ingredients</Card.Header>
                    <List>
                    {r.ingredients.split(',').map(i => {
                        return (
                            <List.Item icon='checkmark box' key={i} content={i} />
                        )
                    })}
                    </List>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='star' />
                    5 Stars
                </Card.Content>
              </Card>
            }
        </>
     );
}
 
export default RecipeCard;