import {getData, showAlert} from './api.js';
import {renderPhotos} from './thumbnail.js';
import {addFilters} from './thumbnail-filter.js';
import './upload-form.js';

let pictures = [];

const getPictures = () => pictures;

getData(
  (data) => {
    pictures = data.slice();
    addFilters();
    renderPhotos(pictures);
  },
  (message) => {
    showAlert(message);
  }
);

export {getPictures};
