/**
 * eg: 
 * toDou(8) ------> '08'
 * toDou(16) -------> '16
 */

function toDou (num) {
	return num < 10 ? '0' + num : '' + num;
}

export default toDou
