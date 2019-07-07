
exports.seed = function(knex, Promise) {
    return knex('shopping_lists').insert([
        {
            user_id: 2,
            ingredient: 12,
            amt: 1,
            measure: '32oz Can'
        },
        {
            user_id: 2,
            ingredient: 13,
            amt: 1,
            measure: 'Whole'
        },
        {
            user_id: 2,
            ingredient: 14,
            amt: 1,
            measure: 'Half'
        },
        {
            user_id: 2,
            ingredient: 15,
            amt: 2,
            measure: 'Large'
        },
        {
            user_id: 2,
            ingredient: 16,
            amt: 0.25,
            measure: 'Cup'
        },
        {
            user_id: 2,
            ingredient: 17,
            amt: 1,
            measure: 'Tbsp'
        },
        {
            user_id: 2,
            ingredient: 18,
            amt: 1,
            measure: 'Tbsp'
        },
        {
            user_id: 2,
            ingredient: 19,
            amt: -1,
            measure: 'Some'
        },
        {
            user_id: 2,
            ingredient: 20,
            amt: -1,
            measure: 'Some'
        },
    ]);
};
