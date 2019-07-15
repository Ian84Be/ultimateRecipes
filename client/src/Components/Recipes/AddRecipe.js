import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import {Button, Form, Input} from 'semantic-ui-react'

const AddRecipe = (props) => {
    // const [myUsername, setMyUsername] = useState('');
    // const [myPassword, setMyPassword] = useState('');

    return ( 
        <Form onSubmit={(e) => e.preventDefault()} unstackable>
            <Form.Group>
                <Form.Input label="Amount" width={2} />
                <Form.Input label="Measure" width={2} />
                <Form.Input label="Ingredient" width={8} />
            </Form.Group>
            <Button type='submit'>Add</Button>
        </Form>
    );
}
 
export default AddRecipe;