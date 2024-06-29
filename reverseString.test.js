import reverseString from './reverseString';

test("one word string is reversed", () => expect(reverseString("mohamed")).toBe("demahom"));
test("casing is reserved", () => expect(reverseString("Mohamed")).toBe("demahoM"));
test("empty", () => expect(reverseString("")).toBe(""));
test("single character string", () => expect(reverseString("a")).toBe("a"));
test("special characters are ignored", () => expect(reverseString("abc!")).toBe("cba!"));
test("a string of multiple words", () => expect(reverseString("my name is mohamed")).toBe("demahom si eman ym"));
test("a string of multiple words and special character at the end", () => expect(reverseString("My name is Mohamed!")).toBe("demahoM si eman yM!"));

