const throttle = require('lodash.throttle');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const submitBtn = document.querySelector('button');

let feedbackForm = {
  email: '',
  message: '',
};

email.addEventListener('input', event => {
  const newEmail = event.target.value;
  feedbackForm.email = newEmail;
  throttledSaveStateToLocalStorage();
});

message.addEventListener('input', event => {
  const newMessage = event.target.value;
  feedbackForm.message = newMessage;
  throttledSaveStateToLocalStorage();
});

function saveStateToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
}

const throttledSaveStateToLocalStorage = throttle(saveStateToLocalStorage, 500);

window.addEventListener('load', () => {
  const savedSettings = localStorage.getItem('feedback-form-state');
  const parsedSettings = JSON.parse(savedSettings);

  if (parsedSettings) {
    feedbackForm = parsedSettings;
    email.value = feedbackForm.email;
    message.value = feedbackForm.message;
  }
});

submitBtn.addEventListener('click', event => {
  event.preventDefault();

  email.value = '';
  message.value = '';
  localStorage.removeItem('feedback-form-state');

  console.log('Form submitted with the following data:');
  console.log(feedbackForm);

  feedbackForm.email = '';
  feedbackForm.message = '';
});

//update to check if github works properly
