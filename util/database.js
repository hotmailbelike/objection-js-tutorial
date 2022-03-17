const { Model } = require('objection');
const Knex = require('knex');

const knex = Knex({
	client: 'pg',
	connection: {
		host: 'ec2-54-158-26-89.compute-1.amazonaws.com',
		user: 'jrkuwxpxpawrhn',
		port: '5432',
		password: 'f6cece2840b7f0f76f0871de7bb5d16e317e4acb7538435e8ecf3696ddf7cbc0',
		database: 'duosp0pt34khm',
	},
});

Model.knex(knex);

module.exports = knex;
