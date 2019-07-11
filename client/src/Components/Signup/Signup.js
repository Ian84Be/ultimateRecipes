import React, {useState} from 'react';

const Signup = (props) => {
    const [myUsername, setMyUsername] = useState('');
    const [myPassword, setMyPassword] = useState('');

    return ( 
       <form onSubmit={(e) => props.userCreate(e, myUsername, myPassword)}>
           <label htmlFor="username">username</label>
           <input id="username" type="text" value={myUsername} onChange={(e) => setMyUsername(e.target.value)}/>
           <label htmlFor="password">password</label>
           <input id="password" type="text" value={myPassword} onChange={(e) => setMyPassword(e.target.value)}/>
           <button>Sign Up</button>
       </form> 
    );
}
 
export default Signup;