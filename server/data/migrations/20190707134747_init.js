
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 128)
                .notNullable()
                .unique();
            tbl.string('password').notNullable();
            tbl.text('shopping_list');
        })
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('title').notNullable().unique();
            tbl.integer('cost').notNullable();
            tbl.integer('servings').notNullable();
            tbl.integer('prep_time').notNullable();
            tbl.integer('cook_time').notNullable();
            tbl.text('ingredients').notNullable();
            tbl.text('how_to').notNullable();
        })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('users');
  };
