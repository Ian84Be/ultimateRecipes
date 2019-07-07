
exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        {
            id:1,
            title:'Spaghetti Nova',
            cost: 20,
            servings: 4,
            prep_time: 20,
            cook_time: 60,
            how_to: 'instructions',
            ingredient_list: 1
        }
    ]);
};

// {
//     id:1,
//     title:'Black Bean & Quinoa Burger',
//     cost: 20,
//     servings: 8,
//     prepTime: 20,
//     cookTime: 10,
//     howTo: 'instructions',
// }