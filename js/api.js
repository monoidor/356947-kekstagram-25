const getData = (onSuccess, onFail) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail('Не удалось получить фотографии. Обновите страницу или попробуйте позже');
    });
};

const showAlert = (message) => {
  const alertElement = document.createElement('div');

  alertElement.classList.add('error-alert');
  alertElement.textContent = message;

  document.body.append(alertElement);
};

export {getData, showAlert};
