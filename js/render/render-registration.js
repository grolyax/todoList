import registrationTemplate from '../templates/pages/registration/index.js';
import registerUser from '../auth/register-user.js';

const rootDiv = document.querySelector('.container');

export default function renderRegistration() {
    rootDiv.innerHTML = registrationTemplate;

    const registrationForm = document.querySelector('.registration-form > form');

    registrationForm.addEventListener('submit', registerUser);
}