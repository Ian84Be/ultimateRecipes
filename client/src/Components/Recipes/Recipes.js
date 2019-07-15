import React, {useState, useEffect} from 'react';
import {NavLink, Route} from 'react-router-dom';
import axios from 'axios';
import RecipeCard from './RecipeCard';

import {RECIPEDATA} from '../../RECIPEDATA';


const Recipes = () => {
    const [recipeData, setRecipeData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/recipes')
            .then(res => setRecipeData(res.data))
            .catch(err => console.log(err))
    },[])
    return ( 
        <div className="Recipes">
            this is the Recipes component
            <div className="list">
                <NavLink exact to="/recipes/add">Add a new recipe!</NavLink>
                <ul>
                    {recipeData.map(r => {
                        return (
                            <NavLink key={r.title} to={'/recipes/card/'+r.id}>
                            <li>${r.cost} {r.title}</li>
                            </NavLink>
                        )
                    })}
                </ul>
            </div>

            <div className="card">
                <Route path="/recipes/card/:id" render={props => {
                    let thisId = Number(props.match.params.id)
                    let thisRecipe = recipeData.filter(r=>r.id===thisId);
                    return (
                        <RecipeCard recipe={thisRecipe}/>
                    )
                }}/>
            </div>
        </div>
     );
}
 
export default Recipes;