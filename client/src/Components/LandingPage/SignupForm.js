import React from 'react';
import axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button, Form, Header, Icon, Input, Message, Modal} from 'semantic-ui-react';

const SignupForm = ({errMsg, setErrMsg}) => {
    return ( 
        <Modal trigger={<Button color='green'>Sign Up</Button>} size='mini' centered closeIcon>
            <Header>
                <Icon name='food'/>
                <Header.Content>
                    ultimateRecipes
                    <Header.Subheader>Create a New Account</Header.Subheader>
                </Header.Content>
            </Header>
            <Modal.Content centered>
                <Formik 
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(true);
                        axios.post('/auth/register', values)
                            .then(res => {
                                actions.resetForm();
                                actions.setSubmitting(false);
                                localStorage.setItem('token', res.data.token);
                                localStorage.setItem('username', res.data.username);
                            })
                            .catch(err => {
                                actions.setSubmitting(false);
                                console.log(JSON.stringify(err));
                                setErrMsg(err.message);
                            });
                    }}
                    validationSchema={() => Yup.object().shape({
                        username: Yup.string().required('please enter a username!'),
                        password: Yup.string().required('please enter a password!'),
                    })}
                    render={props => (
                        <Form error onSubmit={props.handleSubmit}>
                            <Form.Field 
                                control={Input} 
                                error={props.touched.username && props.errors.username && { content: props.errors.username, pointing: 'below' }}
                                label="Username"
                                name="username"
                                onChange={props.handleChange}
                                value={props.values.username}
                            />
                            <Form.Field 
                                control={Input} 
                                error={props.touched.password && props.errors.password && { content: props.errors.password, pointing: 'below' }}
                                label="Password"
                                name="password"
                                onChange={props.handleChange}
                                value={props.values.password}
                            />
                            <Button 
                                loading={props.isSubmitting} 
                                primary color='black' 
                                type='submit'>Submit</Button>
                        </Form>
                    )}
                />
                {errMsg && <Message error header='Error' content={errMsg}/>}
            </Modal.Content>
        </Modal>
        
     );
}
 
export default SignupForm;