const router = require('express').Router();

const Recipes = require('./recipes-model.js');

// restricted route /api/recipes
router.post('/', async (req, res) => {
	try {
		const newRecipe = await Recipes.add(req.body);
		if (newRecipe) {
			res.status(204).json(newRecipe);
		} else {
			res
				.status(595)
				.json({ error: 'failed to add recipe' });
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', async (req,res) => {
	try {
		const updated = await Recipes.update(req.params.id, req.body);
		if (updated) {
			res.status(200).json(updated);
		} else {
			res
				.status(404)
				.json({ message: 'The Recipe with the specified ID does not exist.' });
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/', async (req, res) => {
	try {
		const allRecipes = await Recipes.find();
		res.status(200).json(allRecipes);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const allRecipes = await Recipes.findById(req.params.id);
		res.status(200).json(allRecipes);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const removed = await Recipes.remove(req.params.id);
		if (removed) {
			res.status(204).json({ success: 'Recipe removed' });
		} else {
			res
				.status(404)
				.json({ message: 'The User with the specified ID does not exist.' });
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
