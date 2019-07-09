const db = require('../data/dbConfig');

module.exports = {
	add,
	remove,
	find,
	findBy,
    findById,
    update
};

async function add(recipe) {
	const [id] = await db('recipes').insert(recipe).returning('id');
	return db('recipes')
		.select('id', 'title')
		.where({ id })
		.first();
}

async function update(id, payload) {
    // const [id] = await db('recipes').where({id}).update(payload).returning('id');
    await db('recipes').where({id}).update(payload);
    return findById(id);
}

async function remove(id) {
	return db('recipes').where({id}).delete();
}

async function find() {
    return db('recipes').select('*');
}

async function findBy(filter) {
	return db('recipes').where(filter).first();
}

async function findById(id) {
    return db('recipes').select('*').where({id}).first();
}

// async function findIngredients(id) {
//     return db('recipes')
//         .select(
//             'il.amt',
//             'il.measure',
//             'i.name'
//         )
//         .from('ingredient_list as il')
//         .where('il.recipe_id', '=', id)
//         .join('ingredients as i', 'i.id', 'il.ingredient');
// }
