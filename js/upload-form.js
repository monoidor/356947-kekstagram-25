import {openUploadModal, closeUploadModal} from './upload-modal.js';
import {validateForm} from './upload-validate.js';
import {sendData} from './api.js';
import {showNotice} from './notice.js';

const form = document.querySelector('#upload-select-image');
const uploadFileElement = form.querySelector('#upload-file');

uploadFileElement.addEventListener('change', () => {
  openUploadModal();
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
