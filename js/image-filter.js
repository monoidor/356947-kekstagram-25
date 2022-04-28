const sliderContainerElement = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const pictureElement = document.querySelector('.img-upload__preview img');
const effectsListElement = document.querySelector('.effects__list');
const effectValueElement = document.querySelector('.effect-level__value');

const effectSettings = {
  'chrome': {
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1,
    filterName: 'grayscale',
    unit: '',
  },
  'sepia': {
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1,
    filterName: 'sepia',
    unit: '',
  },
  'marvin': {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    filterName: 'invert',
    unit: '%',
  },
  'phobos': {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    filterName: 'blur',
    unit: 'px',
  },
  'heat': {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    filterName: 'brightness',
    unit: '',
  },
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

function updateSliderOptions (settings) {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: settings.range.min,
      max: settings.range.max,
    },
    start: settings.start,
    step: settings.step,
  });
}

function updateSliderEffects (effect) {
  sliderElement.noUiSlider.on('update', () => {
    const value = sliderElement.noUiSlider.get();

    setEffect(value);
    setPictureEffect(effect, value);
    setSliderContainerDisplay('block');
  });
}

effectsListElement.addEventListener('change', (evt) => {
  if (evt.target.matches('input[name="effect"]')) {
    const effect = evt.target.value;

    if (effect === 'none') {
      resetEffect();
    } else {
      updateSliderOptions(effectSettings[effect]);
      updateSliderEffects(effect);
    }
  }
});

function setEffect (value) {
  effectValueElement.value = value;
}

function setPictureEffect (effect, value) {
  pictureElement.style.filter = `${effectSettings[effect].filterName}(${value}${effectSettings[effect].unit})`;
  pictureElement.classList.add(`effects__preview--${effect}`);
}

function setSliderContainerDisplay (value) {
  sliderContainerElement.style.display = value;
}

function resetEffect () {
  setEffect('');
  setSliderContainerDisplay('none');

  pictureElement.style.filter = '';
  pictureElement.classList = '';
}

export {resetEffect};
