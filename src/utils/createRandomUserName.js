exports.createRandomUserName = (fullName) => {
  const nameArray = fullName.split(" ");

  const shortname = nameArray.reverse().join("");

  const randomNumber = Math.floor(Math.random() * 100);
  const twoDigitRandomNumber = randomNumber.toString().padStart(2, "0");

  const userName = `@${shortname}_${twoDigitRandomNumber}`;

  return userName;
};
