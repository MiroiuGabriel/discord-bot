import { getEmoji } from './commands/getEmoji.js';
import { getRandomNumber } from './commands/getRandomNumber.js';
import { rip, rollDice } from './commands/rolldice.js';
import { getFunctionParameterNames } from './helpers.js';
import { CommandError } from './commands/error.js';

function getSlave() {
	return '<@285131966691409932>';
}

const allCommands = new Map();
allCommands.set('!number', getRandomNumber);
allCommands.set('!help', getInfo);
allCommands.set('!emoji', getEmoji);
allCommands.set('!rip', rip);
allCommands.set('!roll', rollDice);
allCommands.set('!slave', getSlave);

function getCommandInfo(cmd) {
	const args = getFunctionParameterNames(cmd[1]).join(' ');
	if (!args.trim() || args.startsWith('...')) {
		return '```' + cmd[0] + '```';
	}

	return '```' + cmd[0] + ' [' + args + ']' + '```';
}

function getInfo(...args) {
	if (args.length > 0) {
		throw new CommandError('Try !help');
	} else {
		const help = "Hello! My name is Mudi and i am your server's bot!\nI can listen to the following commands: ";
		const cmds = [...allCommands.entries()];
		return help + cmds.map(getCommandInfo).join('');
	}
}

export default allCommands;
