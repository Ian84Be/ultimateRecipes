import React, {useState} from 'react';
import axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
    Button, 
    Divider, 
    Form, 
    Grid, 
    Header, 
    Icon, 
    Input, 
    Message,
    Modal,
    Segment} from 'semantic-ui-react'

const LandingPage = (props) => {
    const [myUsername, setMyUsername] = useState('');
    const [myPassword, setMyPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    return ( 
        <>
        <Header as='h2' icon textAlign='center'>
            <Icon name='food' circular />
            <Header.Content>ultimateRecipes</Header.Content>
        </Header>

        <Segment placeholder>
            <Grid columns={2} textAlign='center'>
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                    <Header>
                        Login
                    </Header>

                    <Formik 
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        onSubmit={(values, actions) => {
                            actions.setSubmitting(true);
                            axios.post('/auth/login', values)
                            .then(res => {
                                actions.resetForm();
                                actions.setSubmitting(false);
                                localStorage.setItem('token', res.data.token);
                                localStorage.setItem('username', res.data.username);
                            })
                            // .then(()=> getShopList())
                            .catch(err => {
                                actions.setSubmitting(false);
                                console.log(JSON.stringify(err));
                                setErrMsg(err.message);
                            });
                        }}
                        validationSchema={() => Yup.object().shape({
                            username: Yup.string().max(10, 'username must be 10 characters or less').required('please enter a username!'),
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
                                    type='submit'>Login</Button>
                                {errMsg && <Message error header='Error' content={errMsg}/>}
                            </Form>
                        )}
                    />
                </Grid.Column>

                <Grid.Column>
                <Header icon>
                    <Icon name='users' />
                    Create a New Account!
                </Header>

                <Modal trigger={<Button color='green'>Sign Up</Button>} size='mini' centered closeIcon>
                    <Header>
                        <Icon name='food'/>
                        <Header.Content>
                            ultimateRecipes
                            <Header.Subheader>Create a New Account</Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Modal.Content centered >
                        <Form onSubmit={(e) => props.userCreate(e, myUsername, myPassword)}>
                            <Form.Field 
                                control={Input} 
                                label="Username"
                                onChange={(e) => setMyUsername(e.target.value)}
                                required
                            />
                            <Form.Field 
                                control={Input} 
                                label="Password"
                                onChange={(e) => setMyPassword(e.target.value)}
                                required
                            />
                            <Button primary color='black' type='submit'>Submit</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment>
        </>
    );
}
 
export default LandingPage;