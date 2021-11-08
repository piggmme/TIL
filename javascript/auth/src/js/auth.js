import axios from 'axios';

import { signinSchema, signupSchema } from './schema';
import { throttle } from './utils';
import toaster, { TOAST_TYPE, createToastAction } from './toaster';

const $signinForm = document.querySelector('.signin.form');
const $signupForm = document.querySelector('.signup.form');
const $signinFormSubmit = document.querySelector('.signin.button');
const $signupFormSubmit = document.querySelector('.signup.button');

let currentForm = 'signin';
let schema = signinSchema;
let $currentForm = $signinForm;
let $currentFormSubmit = $signinFormSubmit;

const toggleAdornment = inputName => {
  $currentForm
    .querySelector(`input[name=${inputName}] ~ .icon-success`)
    .classList.toggle('hidden', !schema[inputName].isValid);

  $currentForm
    .querySelector(`input[name=${inputName}] ~ .icon-error`)
    .classList.toggle('hidden', schema[inputName].isValid);
};

const setErrorMessage = inputName => {
  $currentForm.querySelector(`input[name=${inputName}] ~ .error`).textContent = schema[inputName]
    .isValid
    ? ''
    : schema[inputName].error;
};

const activateSubmitButton = () => {
  $currentFormSubmit.disabled = !schema.isValid;
};

// Event handlers
const toggleCurrentForm = () => {
  // TODO: schema 초기화

  if (currentForm === 'signin') {
    currentForm = 'signup';
    schema = signupSchema;

    $currentForm = $signupForm;
    $currentFormSubmit = $signupFormSubmit;
  } else {
    currentForm = 'signin';
    schema = signinSchema;

    $currentForm = $signinForm;
    $currentFormSubmit = $signinFormSubmit;
  }

  document.querySelectorAll('.form').forEach($form => $form.classList.toggle('hidden'));
};

const validate = throttle(e => {
  const { name, value } = e.target;

  schema[name].value = value.trim();

  toggleAdornment(name);
  setErrorMessage(name);
  activateSubmitButton();
}, 300);

const request = async e => {
  e.preventDefault();

  // const payload = { email: $form.userid.value, password: $form.password.value };
  const payload = [...new FormData($currentForm)].reduce(
    // eslint-disable-next-line no-return-assign, no-sequences
    (obj, [key, value]) => ((obj[key] = value), obj),
    {}
  );

  // TODO: request with payload & move to another page
  // console.log(`POST /${currentForm}`, payload);

  try {
    const { data: user } = await axios.post(`/auth/${currentForm}`, payload);

    console.log('😀 LOGIN SUCCESS!');
    console.log(user);

    if (user) window.location.href = '/';
  } catch (e) {
    // login 실패...
    console.log('😱 LOGIN FAILURE..');
    toaster.add(createToastAction(TOAST_TYPE.ERROR, '로그인 실패', e.response.data.error));
  }
};

// Event binding
[$signinForm, $signupForm].forEach($form => {
  $form.oninput = validate;
  $form.onsubmit = request;
  $form.querySelector('.link > a').onclick = toggleCurrentForm;
});
