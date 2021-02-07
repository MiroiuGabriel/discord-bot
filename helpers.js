export function getFunctionParameterNames(fn) {
	const fstr = fn.toString();
	return fstr
		.match(/\(.*?\)/)[0]
		.replace(/[()]/gi, '')
		.replace(/\s/gi, '')
		.split(',');
}
