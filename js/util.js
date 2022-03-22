function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if(max > min && min >= 0) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  return 0;
}

function getNonRepeatingElement (store) {
  let i = 0;
  let id;

  while (i < 1) {
    id = getRandomInt(1, 1000);

    if (store.indexOf(id) === -1) {
      store.push(id);
      i++;
    }
  }

  return id;
}

function getRandomArrayElement (elements) {
  return elements[getRandomInt(0, elements.length - 1)];
}

export {getRandomInt, getNonRepeatingElement, getRandomArrayElement};
