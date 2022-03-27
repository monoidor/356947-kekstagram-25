import {createSimilarPhoto} from './data.js';

const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureFragment = document.createDocumentFragment();

const similarPhoto = createSimilarPhoto();

similarPhoto.forEach((photo) => {
  const photoElement = pictureTemplate.cloneNode(true);

  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

  pictureFragment.appendChild(photoElement);
});

pictureListElement.appendChild(pictureFragment);
