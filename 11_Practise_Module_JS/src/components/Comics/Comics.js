import { getDataApi } from "../../utils/GetDataApi";
import { BASE_URL, COMICS_ENDPOINT } from '../../constants/api';

class Comics {
    async render() {
        const data = await getDataApi.getData(BASE_URL + COMICS_ENDPOINT)
        console.log(data);
    }
}

export default new Comics();