const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const removePhotos = () => {
  const photoElements = document.querySelectorAll('.picture');
  if (photoElements) {
    photoElements.forEach((photo) => photo.remove());
  }
};

const pictureFragment = document.createDocumentFragment();

const renderPhotos = (photos) => {
  removePhotos();

  photos.forEach((photo) => {
    const photoElement = pictureTemplate.cloneNode(true);

    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

    pictureFragment.appendChild(photoElement);
  });

  pictureListElement.appendChild(pictureFragment);
};

export {renderPhotos};
