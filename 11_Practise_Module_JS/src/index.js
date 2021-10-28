import 'regenerator-runtime/runtime';

import { getDataApi } from "./utils/GetDataApi";
import { BASE_URL, COMICS_ENDPOINT } from './constants/api';

(async () => {
    const data = await getDataApi.getData(BASE_URL + COMICS_ENDPOINT)
    console.log(data);
})()