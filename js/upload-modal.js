import {isEscapeKey} from './util.js';

const uploadModalElement = document.querySelector('.img-upload__overlay');
const uploadModalCloseElement = uploadModalElement.querySelector('#upload-cancel');
const bodyElement = document.querySelector('body');

function onUploadModalEscKeydown (evt) {
  if (isEscapeKey(evt)
    && !evt.target.classList.contains('text__hashtags')
    && !evt.target.classList.contains('text__description')) {
    evt.preventDefault();
    closeUploadModal();
  }
}

function onUploadModalCloseClick () {
  closeUploadModal();
}

function openUploadModal () {
  uploadModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onUploadModalEscKeydown);
  uploadModalCloseElement.addEventListener('click', onUploadModalCloseClick);
}

function closeUploadModal () {
  uploadModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onUploadModalEscKeydown);
  uploadModalCloseElement.removeEventListener('click', onUploadModalCloseClick);
}

export {openUploadModal, closeUploadModal};
