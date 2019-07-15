import React from 'react';

const RecipeCard = (props) => {
    let r = props.recipe[0];
    console.log(r);
    return ( 
        <div className="RecipeCard">
            <header>
                <p><em>{r.title}</em> ${r.cost} / {r.servings} servings = <small>${r.cost/r.servings} ea</small></p>
                <p>{r.prepTime}m prepTime</p>
                <p>{r.cookTime}m cookTime</p>
            </header>

            <div className="ingredients">
                <p><em>INGREDIENTS</em></p>
                {r.ingredients.split(',').map(i => <p key={i}>{i}</p>)}
            </div>
        </div>
     );
}
 
export default RecipeCard;