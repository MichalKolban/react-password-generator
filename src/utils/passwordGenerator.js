export const passwordGenerator = (capital, number, special, length) => {
  const passwordArr = [];

  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const capitalLetters = letters.map((letter) => letter.toUpperCase());
  const numbers = "0123456789".split("");
  const specialChars = "!@#$%^&*()_+-={}[]|;:<>?/".split("");

  passwordArr.push(...letters);

  if (capital) {
    passwordArr.push(...capitalLetters);
  }
  if (number) {
    passwordArr.push(...numbers);
  }
  if (special) {
    passwordArr.push(...specialChars);
  }
  let output = "";

  for (let i = 0; i < Number(length); i++) {
    const random = passwordArr[Math.floor(Math.random() * passwordArr.length)];
    output += random;
  }

  return output;
};
