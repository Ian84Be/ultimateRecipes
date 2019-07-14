import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://replate-backend.herokuapp.com/api';

axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem('token');
        return options;
        },
    function(error) {
        // do something with the error
        return Promise.reject(error);
    }
);

export default function(Component) {
    return class Authenticated extends React.Component {
        render() {
        const token = localStorage.getItem('token');
        // const notLoggedIn = <div>Please login to see the users</div>;

        return <> {token ? <Component {...this.props} /> : <ViewLoggedin {...this.props}/>} </>;
        }
    }   
}