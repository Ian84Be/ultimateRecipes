
exports.seed = function(knex, Promise) {
    return knex('ingredient_lists').insert([
        {
            recipe_id: 1,
            ingredient: 11,
            amt: 1,
            measure: '32oz Can'
        },
        {
            recipe_id: 1,
            ingredient: 12,
            amt: 1,
            measure: 'Whole'
        },
        {
            recipe_id: 1,
            ingredient: 13,
            amt: 1,
            measure: 'Half'
        },
        {
            recipe_id: 1,
            ingredient: 14,
            amt: 2,
            measure: 'Large'
        },
        {
            recipe_id: 1,
            ingredient: 15,
            amt: 0.25,
            measure: 'Cup'
        },
        {
            recipe_id: 1,
            ingredient: 16,
            amt: 1,
            measure: 'Tbsp'
        },
        {
            recipe_id: 1,
            ingredient: 17,
            amt: 1,
            measure: 'Tbsp'
        },
        {
            recipe_id: 1,
            ingredient: 18,
            amt: -1,
            measure: 'Some'
        },
        {
            recipe_id: 1,
            ingredient: 19,
            amt: -1,
            measure: 'Some'
        },
    ]);
};

// exports.seed = function(knex, Promise) {
//     return knex('ingredient_lists').insert([
//         0{name: 'Ground Beef'},
//         1{name: 'Roma Tomatoes'},
//         2{name: 'Cumin Powder'},
//         3{name: 'Chili Powder'},
//         4{name: 'Water'},
//         5{name: 'Shredded Cheese'},
//         6{name: 'Tortillas'},
//         7{name: 'Pizza Dough'},
//         8{name: 'Pizza Sauce'},
//         9{name: 'Cream Cheese'},
//         10{name: 'Shredded Chicken'},
//         11{name: 'Frank\'s Hot Sauce'},
//         12{name: 'Whole Peeled Tomatoes'},
//         13{name: 'Polska Kielbasa Sausage'},
//         14{name: 'Vidalia Sweet Onion'},
//         15{name: 'Carrots'},
//         16{name: 'Pinot Noir (red wine)'},
//         17{name: 'Sugar'},
//         18{name: 'Butter'},
//         19{name: 'Extra Virgin Olive Oil'},
//         20{name: 'Salt & Pepper'},
//         21{name: 'Red or Multi-color Quinoa'},
//         22{name: 'Unseasoned Black Beans'},
//         23{name: 'Unseasoned Panko Bread Crumbs'},
//         24{name: 'Agave Syrup'},
//         25{name: 'Smoked Paprika'},
//     ]);
// };
