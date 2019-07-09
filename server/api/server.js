const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const restricted = require('./auth/restricted-middleware.js');
const authRouter = require('./auth/auth-router');
const usersRouter = require('./users-router'); 
const recipesRouter = require('./recipes-router'); 

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('/api/recipes', restricted, recipesRouter);

server.get('/', (req, res) => {
	res.send("*** realUltimateRecipes ***");
});

module.exports = server;
