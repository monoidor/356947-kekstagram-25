function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if(max > min && min >= 0) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  return 0;
}

function getNonRepeatingElement (min, max) {
  const store = [];

  return function () {
    let currentValue = getRandomInt(min, max);

    if (store.length >= (max - min + 1)) {
      return null;
    }

    while (store.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }

    store.push(currentValue);

    return currentValue;
  };
}

function getRandomArrayElement (elements) {
  return elements[getRandomInt(0, elements.length - 1)];
}

export {getRandomInt, getNonRepeatingElement, getRandomArrayElement};
