
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = require('./secrets').jwtSecret;
const Users = require('../users-model');

// for endpoints beginning with /api/auth
router.post('/register', async (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
	user.password = hash;

	try {
        const newUser = await Users.add(user);
        const token = generateToken(user)
		res.status(201).json({
            id: newUser.id,
            username: newUser.username,
            token: token
        });
	}
	catch(err) {
		res.status(500).json(err);
	}
});

router.post('/login', async (req, res) => {
	let { username, password } = req.body;

	try {
		const user = await Users.findBy({ username:username });
		if (user && bcrypt.compareSync(password, user.password)) {
			const token = generateToken(user);
			res.status(200).json({
				message: `Welcome ${user.username}!`,
				username: user.username,
				id: user.id,
				token: token
			});
		} else {
			res.status(401).json({ message: 'Invalid Credentials' });
		}
	}
	catch(err) {
		res.status(500).json(err);
	}
});

function generateToken(user) {
	const payload = {
		subject: user.id,
		username: user.username
	};

	const options = {
		// expiresIn: '1d'
	};

	return jwt.sign(payload, secret, options);
}

module.exports = router;
