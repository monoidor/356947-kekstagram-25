import {getData, showAlert} from './api.js';

const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureFragment = document.createDocumentFragment();

const renderPhotos = (photos) => {
  photos.forEach((photo) => {
    const photoElement = pictureTemplate.cloneNode(true);

    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

    pictureFragment.appendChild(photoElement);
  });

  pictureListElement.appendChild(pictureFragment);
};

getData(
  (photos) => {
    renderPhotos(photos);
  },
  (message) => {
    showAlert(message);
  }
);
