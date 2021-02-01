import userList from '../users.js';
import { navigateToUrl } from '../routing.js';
import currentUser from '../current-user.js';
import storageService from '../storage-service.js';

function validateLogin({ user, password }) {
    let errors = {
        user: [],
        password: []
    };

    if (!user) {
        errors = { ...errors, user: [...errors.user, 'User does not exist.'] };
    }

    const hashedPassword = CryptoJS.SHA3(password).toString();

    if (user && user.password !== hashedPassword) {
        errors = { ...errors, password: [...errors.password, 'Password does not match.'] }
    }
        
    return errors;
}




export default function loginUser(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('user');
    const password = formData.get('password');

    const user = userList.getUserByEmail(email);

    const errors = validateLogin({ user, password });

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


    currentUser.login(user);
    storageService.set('currentUser', JSON.stringify(user));

    navigateToUrl('/');
}

