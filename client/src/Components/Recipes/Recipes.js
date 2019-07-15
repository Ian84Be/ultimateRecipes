import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Recipes = (props) => {
    return ( 
        <div className="Recipes">
            this is the Recipes component
            <div className="list">
                <NavLink exact to="/recipes/add">Add a new recipe!</NavLink>
                <ul>
                    {props.recipeData.map(r => {
                        return (
                            <NavLink key={r.title} to={'/recipes/card/'+r.id}>
                            <li>${r.cost} {r.title}</li>
                            </NavLink>
                        )
                    })}
                </ul>
            </div>

            <div className="card">
                <Route path="/recipes/card/:id" render={ownProps =>
                    <RecipeCard {...ownProps} recipeData={props.recipeData}/>
                }/>
            </div>
        </div>
     );
}
 
export default Recipes;