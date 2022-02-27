function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if(max > min && min >= 0) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  return 0;
}

getRandomInt(0, 23);

function checkLengthString (string, maxLength) {
  return string.length <= maxLength;
}

checkLengthString('Проверка комментария', 140);
