const fastify = require('fastify');
const db = require('./dbConn');
const todosRoutes = require('./routes/todos/todos');

function init(opts = {}) {
	const app = fastify(opts);

	app.register(db, {
		url: process.env.DB_URL,
	});
	app.register(todosRoutes, { prefix: '/todos' });

	return app;
}

module.exports = init;
