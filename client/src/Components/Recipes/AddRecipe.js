import React, {useState} from 'react';
import {Button, Card, Form, Input, Label} from 'semantic-ui-react'

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

    return ( 
        <Card className="AddRecipe" fluid>
            <Form onSubmit={(e) => submitRecipe(e)}>
            <Card.Content>
                <Card.Header>
                    <Label pointing='right'>Recipe Title</Label>
                    <Input
                        name='title' 
                        value={thisRecipe.title} 
                        onChange={(e) => changeHandler(e)}
                        size='mini'
                    />
                </Card.Header>
                <Card.Meta>
                    <Label pointing='right'>Makes</Label>
                    <Input
                        label={{ basic: true, content: 'Servings' }}
                        labelPosition='right'
                        name='servings' 
                        value={thisRecipe.servings} 
                        onChange={(e) => changeHandler(e)}
                    />
                    <Label pointing='right'>Prep Time</Label>
                    <Input
                        label={{ basic: true, content: 'Minutes' }}
                        labelPosition='right'
                        name='prep_time' 
                        value={thisRecipe.prep_time} 
                        onChange={(e) => changeHandler(e)}
                    />
                    <Label pointing='right'>Cook Time</Label>
                    <Input
                        label={{ basic: true, content: 'Minutes' }}
                        labelPosition='right'
                        name='cook_time' 
                        value={thisRecipe.cook_time} 
                        onChange={(e) => changeHandler(e)}
                    />

                </Card.Meta>
                <Card.Description>
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
                
                    <Form.TextArea 
                        name='how_to'
                        value={thisRecipe.how_to} 
                        label='How-To' 
                        placeholder='Preheat Oven to 420...' 
                        onChange={(e) => changeHandler(e)}
                    />
                    <Button type='submit'>Submit Recipe</Button>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <em>INGREDIENTS</em>
                {thisRecipe.ingredients.split(',').map(i => <p key={i}>{i}</p>)}
                {/* {myIngredients.split(',').map(i => <p key={i}>{i}</p>)} */}
            </Card.Content>
            </Form>
        </Card>
    );
}
 
export default AddRecipe;