function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if(max > min && min >= 0) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  return 0;
}

const NAMES = [
  'Вашингтон',
  'Адамс',
  'Джефферсон',
  'Мэдисон',
  'Монро',
  'Адамс',
  'Джексон',
  'Бюрен',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const SIMILAR_PHOTO_COUNT = 25;

const similarPhoto = Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

function createPhoto (value, index) {
  const id = index + 1;

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Фотография с идентификатором ${id}`,
    likes: getRandomInt(15, 200),
    comments: Array.from({length: getRandomInt(1, 10)}, createComment)
  };
}

const usedCommentsId = [];

function createComment () {
  return {
    id: getNonRepeatingElement(usedCommentsId),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: Array.from({length: getRandomInt(1, 2)}, () => getRandomArrayElements(COMMENTS)).join(' '),
    name: getRandomArrayElements(NAMES)
  };
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

function getRandomArrayElements (elements) {
  return elements[getRandomInt(0, elements.length - 1)];
}
