
exports.seed = function(knex, Promise) {
    return knex('users').insert([
      {
          username: 'admin',
          password: 'admin'
      },
      {
          username: 'ian',
          password: 'ian'
      }
    ]);
};
