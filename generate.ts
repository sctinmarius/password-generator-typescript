import {
  PasswordCharacters,
  getRandomNumber,
  IncludeCharacters,
  GeneratePassword,
  RandomPassword,
} from "./shared";

export const generatePassword: GeneratePassword = {
  generate: (lengthPassword: number, includeCharacters: IncludeCharacters) => {
    const password: string[] = [];

    for (let i = 0; i <= lengthPassword; i++) {
      if (includeCharacters.isUpperCase) password.push(getRandomPassword.lowerCase());
      if (includeCharacters.isLowerCase) password.push(getRandomPassword.upperCase());
      if (includeCharacters.isNumbers) password.push(getRandomPassword.number());
      if (includeCharacters.isSymbols) password.push(getRandomPassword.symbol());
    }

    return password.slice(0, lengthPassword).join("");
  },
};

const getRandomPassword: RandomPassword = {
  upperCase: () => {
    const randomNumber = getRandomNumber(PasswordCharacters.UpperCase.length);
    return PasswordCharacters.UpperCase[randomNumber];
  },
  lowerCase: () => {
    const randomNumber = getRandomNumber(PasswordCharacters.LowerCase.length);
    return PasswordCharacters.LowerCase[randomNumber];
  },
  number: () => {
    const randomNumber = getRandomNumber(PasswordCharacters.Numbers.length);
    return PasswordCharacters.Numbers[randomNumber];
  },
  symbol: () => {
    const randomNumber = getRandomNumber(PasswordCharacters.Symbols.length);
    return PasswordCharacters.Symbols[randomNumber];
  },
};
