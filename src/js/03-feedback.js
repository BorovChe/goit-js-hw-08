

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', onInputValue);
formEl.addEventListener('submit', makeSubmit)

let objForm = {};

function onInputValue(e) {
  const emailValue = e.currentTarget.email.value;
  const messageValue = e.currentTarget.message.value;

  objForm = { email: `${emailValue}`, message: `${messageValue}` };

  localStorage.setItem('feedback-form-state', JSON.stringify(objForm)); 
};
 
try {
  const parseObj = JSON.parse(localStorage.getItem('feedback-form-state'));
  formEl.email.value = parseObj.email;
formEl.message.value = parseObj.message;
} catch (error) {
}


function makeSubmit(e) {
  e.preventDefault();
  console.log(objForm);
  localStorage.clear();
formEl.email.value = '';
formEl.message.value = '';
};