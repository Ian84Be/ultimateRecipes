import React from 'react';
import {RECIPEDATA} from '../../RECIPEDATA';

const Recipes = () => {
    return ( 
        <div className="Recipes">
            this is the Recipes component
            <div className="list">
                <ul>
                    {RECIPEDATA.map(r => {
                        return (
                            <li>${r.cost} {r.title}</li>
                        )
                    })}
                </ul>
            </div>

            <div className="card">
                {RECIPEDATA.map(r => {
                    return (
                        <div className="RecipeCard">
                            <header>
                                <p><em>{r.title}</em> ${r.cost} / {r.servings} servings = <small>${r.cost/r.servings} ea</small></p>
                                <p>{r.prepTime}m prepTime</p>
                                <p>{r.cookTime}m cookTime</p>
                            </header>

                            <div className="ingredients">
                                <p><em>INGREDIENTS</em></p>
                                {r.ingredients.map(i => {
                                    if (i.amt < 0) i.amt = '';
                                    return (
                                        <p>{i.amt} {i.measure} {i.name}</p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Recipes;