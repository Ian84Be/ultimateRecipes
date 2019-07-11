import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Login = (props) => {
    const [myUsername, setMyUsername] = useState('');
    const [myPassword, setMyPassword] = useState('');

    return ( 
       <form onSubmit={(e) => props.userLogin(e, myUsername, myPassword)}>
           <label htmlFor="username">username</label>
           <input id="username" type="text" value={myUsername} onChange={(e) => setMyUsername(e.target.value)}/>
           <label htmlFor="password">password</label>
           <input id="password" type="text" value={myPassword} onChange={(e) => setMyPassword(e.target.value)}/>
           <button>Login</button>
           <p>Don't have an account? <Link to="/signup">Sign-up Today!</Link></p>
       </form> 
    );
}
 
export default Login;