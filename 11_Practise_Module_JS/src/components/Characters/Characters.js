import { getDataApi } from '../../utils/GetDataApi';
import { IMG_STANDART_XLARGE } from '../../constants/api';
import Notification from '../Notification';
import imgCloseWhite from './img/close-white.svg';
import classes from './Characters.css';
import { ROOT_MODAL } from '../../constants/root';

class Characters {
    renderContent(data) {
        let htmlContent = ``;

        data.forEach(({ name, thumbnail: {extension, path} }) => {
            const imgSrc = path + '/' + IMG_STANDART_XLARGE  + '.' + extension;
            
            htmlContent += `
                <li class="${classes.characters__item}">
                    <img class="img-cover ${classes.characters__img}" src="${imgSrc}" />
                    <span class="${classes.characters__name}">${name}</span>
                </li>
            `
        })
        const htmlWrapper = `
            <div class="${classes.wrapper}">
                <ul class="${classes.characters__container}">
                    ${htmlContent}
                </ul>
                <button 
                    onclick="modal.innerHTML = ''" 
                    class="btn ${classes.characters__close}"
                    style="background-image: url(${imgCloseWhite})"
                ></button>
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    async render(uri) {
        const data = await getDataApi.getData(uri);
        
        data.length ? this.renderContent(data) : Notification.render();
    }
}

export default new Characters;