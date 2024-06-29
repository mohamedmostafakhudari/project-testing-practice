export default function analyzeArray(arr = []) {
	if (!valid(arr)) {
		throw new Error("expected an array of numbers");
	}
	return {
		average: getAverage(arr),
		min: getMin(arr),
		max: getMax(arr),
		length: arr.length,
	};
}

function getAverage(arr) {
	if (!arr.length) return undefined;
	const sum = arr.reduce((tot, cur) => tot + cur, 0);
	return sum / arr.length;
}
function getMin(arr) {
	if (!arr.length) return undefined;
	return Math.min(...arr);
}
function getMax(arr) {
	if (!arr.length) return undefined;
	return Math.max(...arr);
}
function valid(arr) {
	return arr.every((x) => typeof x === "number");
}
