const alphabetics = "abcdefghijklmnopqrstuvwxyz";

export default function caesarCipher(str, factor) {
	if (typeof str !== "string") {
		throw new Error("a string is expected.");
	}
	if (typeof factor !== "number") {
		throw new Error("factor is expected to be of type number.");
	}
	return str.replace(/[a-z]/gi, (char) => {
		const alphaIndex = updateIndex(char, factor);
		if (char === char.toUpperCase()) {
			return alphabetics[alphaIndex].toUpperCase();
		}
		return alphabetics[alphaIndex];
	});
}

function updateIndex(char, factor) {
	let index;
	if (char === char.toUpperCase()) {
		index = (char.charCodeAt(0) + factor - 65) % 26;
	} else {
		index = (char.charCodeAt(0) + factor - 97) % 26;
	}

	return index < 0 ? index + 26 : index;
}
