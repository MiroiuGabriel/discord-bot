import { CommandError } from './error.js';

export function getRandomNumber(minimum, maximum) {
	if (minimum || maximum) {
		if (Number.isInteger(+minimum) && Number.isInteger(+maximum)) {
			return Math.floor(+minimum + Math.random() * (+maximum - +minimum));
		} else {
			throw new CommandError('Invalid command');
		}
	}

	return Math.floor(Math.random() * 1000);
}
