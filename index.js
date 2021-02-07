'use strict';
import { config } from 'dotenv';
config();

import Discord from 'discord.js';
import commands from './commands.js';
import { CommandError } from './commands/error.js';

const client = new Discord.Client(); // creates a discord client
const token = process.env.DISCORD_TOKEN;

client.once('ready', () => {
	// prints "Ready!" to the console once the bot is online
	client.user.setActivity('!help', { type: 'LISTENING' });
	console.log('Ready!');
});
// runs whenever a message is sent
client.on('message', message => {
	const command = message.content.split(' ');
	const commandName = command[0];
	if (commands.has(commandName)) {
		const handler = commands.get(commandName);
		const args = command.splice(1, command.length);

		try {
			const msg = handler(...args);
			if (Array.isArray(msg)) {
				message.channel.send(msg[0], msg[1]);
			} else {
				message.channel.send(msg);
			}
		} catch (e) {
			if (e instanceof CommandError) {
				message.channel.send(e.message);
			} else {
				console.error(e.message);
			}
		}
	}
});

client.login(token); // starts the bot up
