const throttle = require('lodash.throttle');
const form = document.querySelector('form');

if (localStorage.getItem('feedback-form-state')) {
  form.elements.email.value =
    JSON.parse(localStorage.getItem('feedback-form-state')).email || '';
  form.elements.message.value =
    JSON.parse(localStorage.getItem('feedback-form-state')).message || '';
}

function handleInput(ev) {
  ev.preventDefault();
  let formValues =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  formValues[ev.target.name] = ev.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
}

form.addEventListener('input', throttle(handleInput, 500));

form.addEventListener('submit', ev => {
  ev.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.clear();
  form.reset();
});
