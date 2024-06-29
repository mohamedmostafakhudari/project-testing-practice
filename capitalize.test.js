import capitalize from "./capitalize.js";

test("should capitalize first character of a word", () => expect(capitalize("john")).toBe("John"));
test("should preserve casing", () => {
	expect(capitalize("johN")).toBe("JohN");
	expect(capitalize("JOHN")).toBe("JOHN");
});
test("should work with sentences", () => expect(capitalize("i am john")).toBe("I am john"));
