import analyzeArray from "./analyzeArray";

test("should analyze array and return result obj", () => {
	const expected = {
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	};
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(expected);
});

test("empty array should give an initial value obj", () => {
	const expected = {
		average: undefined,
		min: undefined,
		max: undefined,
		length: 0,
	};
	expect(analyzeArray([])).toEqual(expected);
	expect(analyzeArray()).toEqual(expected);
});

test("an array of non-number elements should throw", () => {
	expect(() => analyzeArray([1, "8", 3, 4, 2, 6])).toThrow("expected an array of numbers");
});
