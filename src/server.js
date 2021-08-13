require('dotenv').config();
const app = require('./app');

const server = app({
	logger: {
		level: 'info',
		prettyPrint: true,
	},
});

const port = process.env.PORT || 4000;

server.listen(port, (err) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}
});
