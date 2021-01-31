import loginTemplate from '../templates/pages/login/index.js';
import loginUser from '../auth/login-user.js';

const rootDiv = document.querySelector('.container');

export default function renderLogin() {
    rootDiv.innerHTML = loginTemplate;

    const loginForm = document.querySelector('.login-form > form');

    loginForm.addEventListener('submit', loginUser);
}