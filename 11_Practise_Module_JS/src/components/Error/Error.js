import { ROOT_INDEX } from '../../constants/root'

import classes from './Error.css';

class Error {
    render() {
        const htmlWrapper = `
            <div class="${classes.error__container}">
                <span>
                    <p class="${classes.error__alert}">Error hapened</p>
                    <p class="${classes.error__alert}">Try to enter again</p>
                </span>
            </div>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Error;