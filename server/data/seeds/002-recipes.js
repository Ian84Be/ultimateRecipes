
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
            ingredients:'2 32oz cans Whole Peeled Tomatoes,1 Whole Polska Kielbasa Sausage,1 Half Vidalia Sweet Onion,2 Large Carrots,1/2 Cup Pinot Noir (red wine),2 Tbsp Sugar,2 Tbsp Butter,some Extra Virgin Olive Oil,some Salt and Pepper'
        }
    ]);
};

// {
//     id:2,
//     title:'Black Bean & Quinoa Burger',
//     cost: 20,
//     servings: 8,
//     prepTime: 20,
//     cookTime: 10,
//     howTo: 'instructions',
// }