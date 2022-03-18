const { Model } = require('objection');
const Knex = require('knex');

const knex = Knex({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root', // replace with your mysql username
		password: '', // replace with your mysql password
		database: 'ks-store', // replace with your db name
	},
});

Model.knex(knex);

module.exports = knex;
