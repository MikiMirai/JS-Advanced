import page from '.../node_modules/page/page.mjs';
import { updateInfo } from '../app';

export const logout = () => {
    fetch('http://localhost:3030/users/logout', {
        'method': 'GET',
        headers: {
            'X-Authorization': localStorage.token
        }
    })

    localStorage.clear()
    page.redirect('/catalog')
    updateInfo()
}