const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const restricted = require('./restricted-middleware.js');
const authRouter = require('./auth-router');
const usersRouter = require('./users-router'); 
// const tripsRouter = require('../api/trips-router');
// const profileRouter = require('../api/profile-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
// server.use('/api/trips', restricted, tripsRouter);
// server.use('/api/profile', restricted, profileRouter);

server.get('/', (req, res) => {
	res.send("*** realUltimateRecipes ***");
});

module.exports = server;
