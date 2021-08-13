const Todo = {
	type: 'object',
	properties: {
		text: {
			type: 'string',
		},
		completed: {
			type: 'boolean',
		},
	},
};

const addTodosOpts = {
	schema: {
		body: {
			type: 'object',
			required: ['text'],
			properties: {
				text: {
					type: 'string',
				},
				completed: {
					type: 'boolean',
				},
			},
		},
		response: {
			201: Todo,
		},
	},
};

const getTodosOpts = {
	schema: {
		response: {
			200: {
				type: 'array',
				todos: Todo,
			},
		},
	},
};

module.exports = {
	getTodosOpts,
	addTodosOpts,
};
