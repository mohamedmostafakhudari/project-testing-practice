import calculator from "./calculator";

// validity of inputs
test("inputs should be numbers", () => {
	const { add, subtract, divide, multiply } = calculator;
	const operators = [add, subtract, divide, multiply];
	for (const operator of operators) {
		expect(() => operator("10", 5)).toThrow("inputs should be of type number");
		expect(() => operator("abc", 5)).toThrow("inputs should be of type number");
	}
});
test("two numbers should be provided", () => {
	expect(() => calculator.add()).toThrow("Inputs are missing!");
	expect(() => calculator.add(10)).toThrow("Inputs are missing!");
});

// validity of results

test("10 + 5 should equal 15", () => expect(calculator.add(10, 5)).toBe(15));
test("10 - 5 should equal 5", () => expect(calculator.subtract(10, 5)).toBe(5));
test("10 / 5 should equal 2", () => expect(calculator.divide(10, 5)).toBe(2));
test("10 / 0 should throw a math error", () => expect(() => calculator.divide(10, 0)).toThrow("Math Error!"));
test("10 * 5 should equal 50", () => expect(calculator.multiply(10, 5)).toBe(50));
