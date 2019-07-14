import React, {useState, useEffect} from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/api';
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

const ShoppingList = (props) => {
    const [myList, setMyList] = useState([]);
    useEffect(() => {
        axios.get(`/users/list/${props.username}`)
            .then(res => {
                console.log(res.data);
                let shopList = res.data.shopping_list.split(',');
                setMyList(shopList);
            })
            .catch(err => console.log(err))
    },[props.username])
    return ( 
        <div className="ShoppingList">
            this is the ShoppingList component
            <ul>
                {myList.map(item => <li key={item}>{item}</li> )}
            </ul>
        </div>
     );
}
 
export default ShoppingList;