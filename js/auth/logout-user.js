import currentUser from '../current-user.js';
import { navigateToUrl } from '../routing.js';
import storageService from '../storage-service.js';


export default function logoutUser() {

    currentUser.logout();
    storageService.set('currentUser', JSON.stringify(currentUser.userData));

    navigateToUrl('/');
}