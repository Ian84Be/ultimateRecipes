import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import RecipeCard from './RecipeCard';

import {RECIPEDATA} from '../../RECIPEDATA';


const Recipes = () => {
    return ( 
        <div className="Recipes">
            this is the Recipes component
            <div className="list">
                <ul>
                    {RECIPEDATA.map(r => {
                        return (
                            <NavLink key={r.title} to={'/recipes/'+r.id}>
                            <li>${r.cost} {r.title}</li>
                            </NavLink>
                        )
                    })}
                </ul>
            </div>

            <div className="card">
                <Route path="/recipes/:id" render={props => {
                    let thisId = Number(props.match.params.id)
                    let thisRecipe = RECIPEDATA.filter(r=>r.id===thisId);
                    return (
                        <RecipeCard recipe={thisRecipe}/>
                    )
                }}/>
            </div>
        </div>
     );
}
 
export default Recipes;