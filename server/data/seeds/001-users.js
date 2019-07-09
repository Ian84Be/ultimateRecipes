
exports.seed = function(knex, Promise) {
    return knex('users').insert([
      {
          username: 'admin',
          password: 'admin'
      },
      {
          username: 'ian',
          password: 'ian',
          shopping_list:'2 32oz cans Whole Peeled Tomatoes,1 Whole Polska Kielbasa Sausage'
      }
    ]);
};
