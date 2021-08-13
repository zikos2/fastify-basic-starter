const { getTodosOpts, addTodosOpts } = require('./schemas');

const todosRoute = (app, _opts, done) => {
	const { Todo } = app.db.models;
	app.get('/', getTodosOpts, async (req, rep) => {
		try {
			const todos = await Todo.find({});
			rep.status(200).send(todos);
		} catch (err) {
			console.log('err');
		}
	});

	app.post('/add', addTodosOpts, async (req, rep) => {
		try {
			const todo = new Todo(req.body);
			await todo.save();
			rep.status(201).send({ msg: 'todo added succefully', todo });
		} catch (err) {
			console.log(err);
		}
	});

	done();
};

module.exports = todosRoute;
