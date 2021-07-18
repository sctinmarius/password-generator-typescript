export function getRandomNumber(limitNumber: number): number {
  return Math.floor(Math.random() * limitNumber);
}

export enum PasswordCharacters {
  UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  LowerCase = "abcdefghijklmnopqrstuvwxyz",
  Numbers = "0123456789",
  Symbols = "~!@#$%^&*()_+=-[]{};:.,/?><",
}

export interface IncludeCharacters {
  isUpperCase: boolean;
  isLowerCase: boolean;
  isNumbers: boolean;
  isSymbols: boolean;
}

export interface RandomPassword {
  upperCase: () => string;
  lowerCase: () => string;
  number: () => string;
  symbol: () => string;
}

export interface GeneratePassword {
  generate: (lengthPassword: number, includeCharacters: IncludeCharacters) => string;
}