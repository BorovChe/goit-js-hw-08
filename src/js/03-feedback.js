var throttle = require('lodash.throttle');


const formEl = document.querySelector('.feedback-form');


formEl.addEventListener('input', throttle(onInputValue, 500));
formEl.addEventListener('submit', makeSubmit);

let objForm = {};

function onInputValue() {
  const emailValue = formEl.email.value;
  const messageValue = formEl.message.value;

  objForm = { email: `${emailValue}`, message: `${messageValue}` };

  localStorage.setItem('feedback-form-state', JSON.stringify(objForm));
}

try {
  const parseObj = JSON.parse(localStorage.getItem('feedback-form-state'));
  formEl.email.value = parseObj.email;
  formEl.message.value = parseObj.message;
} catch (error) {}

function makeSubmit(e) {
  e.preventDefault();
  if (formEl.email.value === '' || formEl.message.value === '') {
    alert("Заполните полe!!!");
  }
  else {
    console.log(objForm);
  localStorage.clear();
  formEl.email.value = '';
  formEl.message.value = '';
  };
};

