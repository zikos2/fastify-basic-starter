const Mongoose = require('mongoose');

const todoSchema = new Mongoose.Schema({
	text: {
		type: String,
	},
	completed: {
		type: String,
	},
});

module.exports = Mongoose.model('Todo', todoSchema);
