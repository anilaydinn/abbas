const { Client } = require('discord.js');
const { musicBot } = require('../../music');

/**
 * @param {Client} client
 */

module.exports = {
	name: 'messageCreate',
	/**
	 * @param {Client} client
	 */

	execute(message, client) {
		musicBot(message, client);
	},
};
