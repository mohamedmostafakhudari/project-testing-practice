const calculator = {
	add: (x, y) => {
		if (x == null || y == null) {
			throw new Error("Inputs are missing!");
		}
		if (typeof x !== "number" || typeof y !== "number") {
			throw new Error("inputs should be of type number");
		}
		return x + y;
	},
	subtract: (x, y) => {
		if (x == null || y == null) {
			throw new Error("Inputs are missing!");
		}
		if (typeof x !== "number" || typeof y !== "number") {
			throw new Error("inputs should be of type number");
		}
		return x - y;
	},
	divide: (x, y) => {
		if (x == null || y == null) {
			throw new Error("Inputs are missing!");
		}
		if (typeof x !== "number" || typeof y !== "number") {
			throw new Error("inputs should be of type number");
		}
		if (y === 0) {
			throw new Error("Math Error!");
		}
		return x / y;
	},
	multiply: (x, y) => {
		if (x == null || y == null) {
			throw new Error("Inputs are missing!");
		}
		if (typeof x !== "number" || typeof y !== "number") {
			throw new Error("inputs should be of type number");
		}
		return x * y;
	},
};

export default calculator;
