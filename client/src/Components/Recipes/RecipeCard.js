import React from 'react';

const RecipeCard = (props) => {
    let r = props.recipe[0];
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
                        <p key={i.name}>{i.amt} {i.measure} {i.name}</p>
                    )
                })}
            </div>
        </div>
     );
}
 
export default RecipeCard;