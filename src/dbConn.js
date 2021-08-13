const mongoose = require('mongoose');
const fastifyPlugin = require('fastify-plugin');
const Todo = require('./models/Todo');

const dbConn = async (fastify, options) => {
	try {
		mongoose.connection.on('connected', () => {
			fastify.log.info({ actor: 'MongoDB' }, 'connected');
		});

		mongoose.connection.on('disconnected', () => {
			fastify.log.error({ actor: 'MongoDB' }, 'disconnected');
		});

		await mongoose.connect(options.url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});

		const models = { Todo };

		fastify.decorate('db', { models });
	} catch (err) {
		console.log(err);
	}
};

module.exports = fastifyPlugin(dbConn);
