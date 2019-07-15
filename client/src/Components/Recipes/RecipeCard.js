import React from 'react';
import {Card, Icon} from 'semantic-ui-react';

const RecipeCard = (props) => {
    let thisId = Number(props.match.params.id)
    let r = props.recipeData.filter(r=>r.id===thisId)[0];
    console.log(r);

    return ( 
        <div className="RecipeCard">
            {r && 
              <Card>
                {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
                <Card.Content>
                    <Card.Header>{r.title}</Card.Header>
                    <Card.Meta>
                        <p>{r.servings} servings</p>
                        <p>{r.prep_time}m prepTime</p>
                        <p>{r.cook_time}m cookTime</p>
                    </Card.Meta>
                    <Card.Description>
                        <em>INGREDIENTS</em>
                        {r.ingredients.split(',').map(i => <p key={i}>{i}</p>)}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href="/">
                    <Icon name='star' />
                    22 Pins
                    </a>
                </Card.Content>
              </Card>
            }
        </div>
     );
}
 
export default RecipeCard;