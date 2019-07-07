
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 128)
                .notNullable()
                .unique();
            tbl.string('password').notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name').notNullable().unique();
        })
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('title').notNullable().unique();
            tbl.integer('cost').notNullable();
            tbl.integer('servings').notNullable();
            tbl.integer('prep_time').notNullable();
            tbl.integer('cook_time').notNullable();
            tbl.text('how_to').notNullable();
            tbl.integer('ingredient_list').unsigned()
                .references('id').inTable('ingredient_lists')
                .onUpdate('CASCADE').onDelete('RESTRICT');
        })
        .createTable('ingredient_lists', tbl => {
            tbl.increments();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('ingredient').unsigned()
                .references('id').inTable('ingredients')
                .onUpdate('CASCADE').onDelete('RESTRICT');
            tbl.integer('amt').unsigned();
            tbl.string('measure').notNullable();
        })
      .createTable('shopping_lists', tbl => {
          tbl.increments();
          tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
          tbl.integer('ingredient').unsigned()
              .references('id').inTable('ingredients')
              .onUpdate('CASCADE').onDelete('RESTRICT');
          tbl.integer('amt').unsigned();
          tbl.string('measure').notNullable();
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('shopping_lists')
        .dropTableIfExists('ingredient_lists')
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('users');
  };
