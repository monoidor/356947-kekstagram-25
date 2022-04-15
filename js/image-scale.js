const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

const scaleSmallerElement = document.querySelector('.scale__control--smaller');
const scaleBiggerElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const pictureElement = document.querySelector('.img-upload__preview img');

const getScaleValue = () => parseFloat(scaleValueElement.value);

function setScaleImage (value) {
  pictureElement.style.transform = value > 0 ? `scale(${value / 100})` : '';
}

function setScale (value) {
  scaleValueElement.value = `${value}%`;
  setScaleImage(value);
}

function onScaleSmallerClick () {
  if (getScaleValue() === MIN_SCALE) {
    return false;
  }

  setScale(getScaleValue() - SCALE_STEP);
}

function onScaleBiggerClick () {
  if (getScaleValue() === MAX_SCALE) {
    return false;
  }

  setScale(getScaleValue() + SCALE_STEP);
}

scaleSmallerElement.addEventListener('click', onScaleSmallerClick);
scaleBiggerElement.addEventListener('click', onScaleBiggerClick);

function resetScale () {
  scaleValueElement.value = `${MAX_SCALE}%`;
  setScaleImage(0);
}

export {resetScale};
