import React, {useState} from 'react';
import {Button, Card, Container, Form, List, Label} from 'semantic-ui-react'

const AddRecipe = (props) => {
    const [newIn, setNewIn] = useState({amount:'',measure:'',ingredient:''});
    const [thisRecipe, setThisRecipe] = useState({
        cook_time:'',
        cost:'',
        how_to:'',
        ingredients:'',
        prep_time:'',
        servings:'',
        title:'',
    });

    return ( 
        <Container style={{width:'505px'}}>
        <Form onSubmit={(e) => submitRecipe(e)}>
            <Form.Group>
            <Form.Field>
                <label>Recipe Title</label>
                <input
                    name='title' 
                    value={thisRecipe.title} 
                    onChange={(e) => changeHandler(e)}
                    size='mini'
                    required
                />
            </Form.Field>
            <Form.Field>
                <label>Servings</label>
                <input
                    name='servings' 
                    value={thisRecipe.servings} 
                    onChange={(e) => changeHandler(e)}
                />
            </Form.Field>
            <Form.Field>
                <label>Prep Time (minutes)</label>
                <input
                    name='prep_time' 
                    value={thisRecipe.prep_time} 
                    onChange={(e) => changeHandler(e)}
                />
            </Form.Field>
            <Form.Field>
                <label>Cook Time (minutes)</label>
                <input
                    name='cook_time' 
                    value={thisRecipe.cook_time} 
                    onChange={(e) => changeHandler(e)}
                />
            </Form.Field>
            </Form.Group>


        
            <Form.TextArea 
                name='how_to'
                value={thisRecipe.how_to} 
                label='How-To' 
                placeholder='Preheat Oven to 420...' 
                onChange={(e) => changeHandler(e)}
            />
            <Button basic color='green' type='submit'>Submit Recipe</Button>

            <Form.Group unstackable>
                <Label pointing='below'>Amount</Label>
                <Label pointing='below'>Measure</Label>
                <Label pointing='below'>Ingredient</Label>
            </Form.Group>
            <Form.Group inline unstackable>
                <Form.Input name='amount' value={newIn.amount} width={2} onChange={(e) => ingredientHandler(e)}/>
                <Form.Input name='measure' value={newIn.measure} width={3} onChange={(e) => ingredientHandler(e)}/>
                <Form.Input name='ingredient' value={newIn.ingredient} width={6} onChange={(e) => ingredientHandler(e)}/>
                <Button onClick={(e) => addIngredient(e)}>Add Ingredient</Button>
            </Form.Group>

            <Card>
                <Card.Content>
                <Card.Header>Ingredients</Card.Header>
                    <List>
                    {thisRecipe.ingredients.length>0 && thisRecipe.ingredients.split(',').map(i => {
                        return (
                            <List.Item icon='checkmark box' key={i} content={i} />
                        )
                    })}
                    </List>
                </Card.Content>
            </Card>

        </Form>
        </Container>
    );
    function addIngredient(e) {
        e.preventDefault();
        let thisIn = `${newIn.amount.trim()} ${newIn.measure.trim()} ${newIn.ingredient.trim()}`
        setThisRecipe({
            ...thisRecipe, 
            ingredients:`${thisRecipe.ingredients.length>0 ? thisRecipe.ingredients + ',' : ''}${thisIn}`
        });
        setNewIn({amount:'',measure:'',ingredient:''});
    }

    function changeHandler(e) {
        setThisRecipe({...thisRecipe, [e.target.name]:e.target.value});
    }

    function ingredientHandler(e) {
        setNewIn({...newIn, [e.target.name]:e.target.value});
    }

    function submitRecipe(e) {
        e.preventDefault();
        console.log(thisRecipe);

    }
}
 
export default AddRecipe;