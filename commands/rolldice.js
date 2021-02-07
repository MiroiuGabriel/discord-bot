import { MessageAttachment } from 'discord.js';
import { CommandError } from './error.js';

const diceSides = new Map();
diceSides.set(1, 'https://i.imgur.com/ACuoKsP.png');
diceSides.set(2, 'https://i.imgur.com/L17Spbp.png');
diceSides.set(3, 'https://i.imgur.com/OOu94sS.png');
diceSides.set(4, 'https://i.imgur.com/vR0wXy5.png');
diceSides.set(5, 'https://i.imgur.com/jGeMOl7.png');
diceSides.set(6, 'https://i.imgur.com/uCMhejd.png');

export function rollDice(...args) {
	if (args.length > 0) {
		throw new CommandError('Try !roll');
	}

	const rolledNumber = Math.floor(Math.random() * 6);

	return new MessageAttachment(diceSides.get(rolledNumber));
}

export function rip() {
	return new MessageAttachment('https://i.imgur.com/w3duR07.png');
}
