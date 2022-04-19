const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field',
  errorClass: 'img-upload__field--invalid',
  successClass: 'img-upload__field--valid',
  errorTextParent: 'img-upload__field',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
}, false);

const MAX_HASHTAGS_AMOUNT = 5;
const MAX_HASHTAG_SYMBOLS = 20;
const MAX_DESCRIPTION_LENGTH = 140;

let errorMessage = '';

const getError = () => errorMessage;

function validateHashtags (value) {
  errorMessage = '';

  const hashtagsData = value.toLowerCase().trim();

  if (!hashtagsData) {
    return true;
  }

  const hashtags = hashtagsData.split(/\s/);

  if (hashtags.length > MAX_HASHTAGS_AMOUNT) {
    errorMessage = `Не более ${MAX_HASHTAGS_AMOUNT} хэш-тегов`;

    return false;
  }

  const regularExpression = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;

  if (!hashtags.every((hashtag) => regularExpression.test(hashtag))) {
    errorMessage = `Хэш-тег содержит недопустимые символы, либо не может состоять из одной решётки. Хэш-тег должен начинаться с символа #. Максимальная длина одного хэш-тега ${MAX_HASHTAG_SYMBOLS} символов, включая решётку. Хэш-теги разделються пробелами`;

    return false;
  }

  if (hashtags.some((element, index, array) => array.includes(element, index + 1))) {
    errorMessage = 'Хэш-теги не должны повторться';

    return false;
  }

  return true;
}

function validateDescription (value) {
  return value.length <= MAX_DESCRIPTION_LENGTH;
}


pristine.addValidator(form.querySelector('input[name="hashtags"]'), validateHashtags, getError);
pristine.addValidator(form.querySelector('input[name="description"]'), validateDescription,  `До ${MAX_DESCRIPTION_LENGTH} символов`);

function validateForm () {
  return pristine.validate();
}

export {validateForm};
