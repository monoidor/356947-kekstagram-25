import {openUploadModal, closeUploadModal} from './upload-modal.js';
import {validateForm} from './upload-validate.js';
import {sendData} from './api.js';
import {showNotice} from './notice.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const form = document.querySelector('#upload-select-image');
const uploadFileElement = form.querySelector('#upload-file');
const previewElement = document.querySelector('.img-upload__preview img');
const previewEffectElements = document.querySelectorAll('.effects__preview');

uploadFileElement.addEventListener('change', () => {
  openUploadModal();

  const file = uploadFileElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewElement.src = URL.createObjectURL(file);
    previewEffectElements.forEach((effects) => {
      effects.style.backgroundImage = `url('${(URL.createObjectURL(file))}')`;
    });
  }
});

const setFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (validateForm()) {
      const formData = new FormData(evt.target);
      const submitButtonElement = form.querySelector('button[type="submit"]');

      submitButtonElement.disabled = true;

      sendData(
        () => {
          onSuccess();
          showNotice('success');
          form.reset();
          submitButtonElement.disabled = false;
        },
        () => {
          showNotice('error');
          submitButtonElement.disabled = false;
        },
        formData);
    }
  });
};

setFormSubmit(closeUploadModal);
