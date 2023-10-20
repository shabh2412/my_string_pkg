// Step 1: Proto Method
// Step 2: window/global
// Step 3: ESM -> Import / Export

var capitalize = function (givenString) {
  // const givenString = this;
  let firstChar = givenString.charAt(0).toUpperCase();
  const remainingString = givenString.slice(1);
  const finalString = firstChar + remainingString;
  return finalString;
};

var countWords = function (givenString) {
  // let givenString = this;
  const words = givenString.split(" ");
  return words.length;
};

var maskSensitiveData = function (givenString) {
  // let givenString = this;
  const emailParts = givenString?.split("@");
  if (emailParts?.length !== 2) {
    throw new Error('Invalid Email');
  }
  const [id, domain] = emailParts;
  const [provider, ending] = domain.split(".");
  const maskChar = '*';

  const maskId = id.charAt(0) + maskChar.repeat(id.length - 1);
  const maskProvider = provider.charAt(0) + maskChar.repeat(provider.length - 1);
  const finalString = `${maskId}@${maskProvider}.${ending}`;
  return finalString;
};

var readingTime = function (givenString) {
  // words per minute
  // const givenString = this;

  let words = givenString.countWords();

  const wordsPerMinute = 200;

  const minutes = words / wordsPerMinute;

  return Math.ceil(minutes);

};

var shorten = function (givenString, len) {
  // const givenString = this;
  const finalString = givenString.split(" ").slice(0, len) + `...`;
  return finalString;
};

// one defaultn export
// two named exports
export default capitalize;

export { maskSensitiveData, capitalize, countWords, readingTime, shorten };