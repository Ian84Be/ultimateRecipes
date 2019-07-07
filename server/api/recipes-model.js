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

async function update(recipe) {
    cont [id] = await db('recipes').where({id}).update(req.body).returning('id');
    return db('recipes')
    .select('id', 'title')
    .where({ id })
    .first();
}

async function remove(id) {
	return db('recipes').where({id}).delete();
}

async function find() {
    //TODO
    //write a join to return the full ingredient_list
    return db('recipes').select('*');
}

async function findBy(filter) {
	return db('recipes').where(filter).first();
}

async function findById(id) {
	return db('recipes')
		.select('id', 'title')
		.where({ id })
		.first();
}
