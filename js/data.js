import {getRandomInt, getNonRepeatingElement, getRandomArrayElement} from './util.js';

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

const generateCommentId = getNonRepeatingElement(1, 1000);

const createSimilarPhoto = () => Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

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

function createComment () {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: Array.from({length: getRandomInt(1, 2)}, () => getRandomArrayElement(COMMENTS)).join(' '),
    name: getRandomArrayElement(NAMES)
  };
}

export {createSimilarPhoto};
