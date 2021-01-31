import userList from '../users.js';
import storageService from '../storage-service.js';
import { navigateToUrl } from '../routing.js';
import { generateId } from '../utils.js';
import currentUser from '../current-user.js';

const EMAIL_REGEX = /\S+@\S+\.\S+/; //регулярное выражение для проверки, емэйла
const MIN_PASSWORD_LENGTH = 8;
const PASSWORD_REGEX = /(([A-Za-z]+\d+)|(\d+[A-Za-z]+))[A-Za-z\d]/;

function validateRegistration({ email, password, repeatPassword }) {
    let errors = {
        email: [],
        password: [],
        repeatPassword: []
    };

    if (!email) {
        errors = { ...errors, email: [...errors.email, 'Email cannot be empty'] }; //throw new Error('Email cannot be empty.');
    }

    if (email && !EMAIL_REGEX.test(email)) {
        // throw new Error('Email invalid format');
        errors = { ...errors, email: [...errors.email, 'Email invalid format'] };
    }

    if (!password) {
        //throw new Error('Password cannot be empty');
        errors = { ...errors, password: [...errors.password, 'Password cannot be empty'] };
    }

    if (password && password.length < MIN_PASSWORD_LENGTH) {
        //throw new Error('Password should contain at least ${MIN_PASSWORD_LENGTH} characters.');
        errors = { ...errors, password: [...errors.password, `Password should contain at least ${MIN_PASSWORD_LENGTH} characters`] };
    }

    if (password && !PASSWORD_REGEX.test(password)) {
        //throw new Error('Password invalid format');
        errors = {
            ...errors,
            password: [...errors.password, 'Password invalid format']
        };
    }

    if (password !== repeatPassword) {
        //throw new Error('Password does not match');
        errors = {
            ...errors,
            repeatPassword: [...errors.repeatPassword, 'Password does not match']
        };
    }

    return errors;
}


export default function registerUser(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    const errors = validateRegistration({ email, password, repeatPassword });

    let hasErrors = false;

    for (let key in errors) {
        const span = document.querySelector(`input[name="${key}"] + span`);

        if (errors[key].length > 0) {
            hasErrors = true;

            const errorStr = errors[key].join('<br>'); //перебрали  одной строкой и каждую новую строку с абзаца

            span.innerHTML = errorStr;
        } else {
            span.innerHTML = '';
        }
    }

    if (hasErrors) {
        return;
    }

    const hashedPassword = CryptoJS.SHA3(password);

    const newUser = {
        id: generateId(userList.users),
        email,
        password: hashedPassword.toString(),
    };

    try {
        userList.add(newUser);
        currentUser.login(newUser);

        storageService.set('users', JSON.stringify(userList.users));
        storageService.set('currentUser', JSON.stringify(currentUser.userData));

        navigateToUrl('/');
    } catch (error) {
        alert(error.message);
    };
}