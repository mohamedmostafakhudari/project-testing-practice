export default function reverseString(str) {
  if (!str.length) return "";
  const [string, specialChar] = str.match(/([a-z\s]+)([!.]*$)/i).slice(1, 3);
  const reversedString = string.split(" ").map(word => word.split("").reverse().join("")).reverse().join(" ");
  return reversedString + (specialChar ? specialChar : "");
}