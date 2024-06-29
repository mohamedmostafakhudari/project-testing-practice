import caesarCipher from "./caesarCipher";

// input validity
test("it should take a string as input", () => {
	expect(() => caesarCipher(123, 3)).toThrow("a string is expected.");
});
test("factor should be a number", () => {
	expect(() => caesarCipher("abc", "2")).toThrow("factor is expected to be of type number.");
});

// result validity

test("the alphabetics should wrap from z to a", () => {
	expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("casing should be preserved", () => {
	expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("it should go backwards with negative factor", () => {
	expect(caesarCipher("abc", -3)).toBe("xyz");
});
test("punctuations, spaces, and other non-alphabetical characters should remain unchanged", () => {
	expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
