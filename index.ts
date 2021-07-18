import { generatePassword } from "./generate";

const getPasswordGenerated = generatePassword.generate;

const getPassword = getPasswordGenerated(12, {
  isUpperCase: true,
  isLowerCase: true,
  isNumbers: true,
  isSymbols: true,
});

console.log("password: ", getPassword);
