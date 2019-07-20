import React from 'react';
import axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button, Form, Input} from 'semantic-ui-react';

const LoginForm = ({setErrMsg}) => {
    return ( 
        <Formik 
            initialValues={{
                username: '',
                password: ''
            }}
            onSubmit={(values, actions) => {
                setErrMsg('');
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
                        type='submit'
                    >Login</Button>
                </Form>
            )}
        />
    );
}
 
export default LoginForm;