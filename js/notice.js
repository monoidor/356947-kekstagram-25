import {isEscapeKey} from './util.js';

let openNoticeType = '';

const onNoticeEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    hideNotice();
  }
};

const onOutsideClick = (evt) => {
  if (!evt.target.closest('.notice__inner')) {
    hideNotice();
  }
};

const onNoticeCloseClick = () => {
  hideNotice();
};

const createNotice = (type) => {
  const noticeTemplate = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const noticeElement = noticeTemplate.cloneNode(true);
  const noticeCloseElement = noticeElement.querySelector('.notice__close');
  const noticeFragment = document.createDocumentFragment();

  document.addEventListener('keydown', onNoticeEscKeydown);
  document.addEventListener('click', onOutsideClick);
  noticeCloseElement.addEventListener('click', onNoticeCloseClick);

  noticeFragment.appendChild(noticeElement);

  return noticeFragment;
};

const showNotice = (type) => {
  document.querySelector('body').appendChild(createNotice(type));

  openNoticeType = type;
};

function hideNotice () {
  if (openNoticeType.length > 0) {
    const noticeElement = document.querySelector(`.${openNoticeType}`);
    noticeElement.remove();

    document.removeEventListener('keydown', onNoticeEscKeydown);
    document.removeEventListener('click', onOutsideClick);

    openNoticeType = '';
  }
}

export {showNotice};
