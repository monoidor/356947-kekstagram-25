import {openUploadModal} from './upload-modal.js';
import {validateForm} from './upload-validate.js';

const form = document.querySelector('#upload-select-image');
const uploadFileElement = form.querySelector('#upload-file');

uploadFileElement.addEventListener('change', () => {
  openUploadModal();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  validateForm();
});
