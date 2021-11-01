import { getDataApi } from "../../utils/GetDataApi";
import { BASE_URL, COMICS_ENDPOINT, IMG_STANDART_XLARGE, IMG_NOT_AVAILABLE, CHARACTERS_ENDPOINT } from '../../constants/api';
import { ROOT_INDEX } from "../../constants/root";
import Error from "../Error/Error";
import Characters from "../Characters/Characters";

import classes from './Comics.css';

class Comics {
    renderComics(data) {
        let htmlContent = '';

        data.forEach(({ id, title, thumbnail: { path, extension }}) => {
            if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
                const imgSrc = path + '/' + IMG_STANDART_XLARGE  + '.' + extension;
                const uri = BASE_URL + COMICS_ENDPOINT + '/' + id + '/' + CHARACTERS_ENDPOINT;

                htmlContent += `
                    <li class="comics__item ${classes.comics__item}" data-uri="${uri}">         
                        <span class="${classes.comics__name}">${title}</span>
                        <img class="img-contain ${classes.comics__img}" src="${imgSrc}" />
                    </li>
                `;
            }

        });

        const htmlWrapper = `
            <ul class="${classes.comics__container}">
                ${htmlContent}
            </ul>
        `

        ROOT_INDEX.innerHTML = htmlWrapper;
    }

    async render() {
        const data = await getDataApi.getData(BASE_URL + COMICS_ENDPOINT);
        
        data ? this.renderComics(data) : Error.render();
    }

    eventListener() {
        document.querySelectorAll('.comics__item').forEach(element => {
            const uri = element.getAttribute('data-uri');

            element.addEventListener('click', () => {
                Characters.render(uri)
            })
        })
    }
}

export default new Comics();