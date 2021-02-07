import emoji from '../emoji.js';
import { CommandError } from './error.js';

export function getEmoji(number) {
	if (number) {
		if (Number.isInteger(+number) && number <= 100) {
			const num = +number;
			const msg = Array.from({ length: num })
				.map(x => emoji())
				.join(' ');
			return msg;
		} else {
			throw new CommandError('Try !emoji 100 or less ');
		}
	}

	return emoji();
}
