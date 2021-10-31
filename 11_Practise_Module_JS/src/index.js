import 'regenerator-runtime/runtime';
import App from './components/App';
import Comics from './components/Comics';

import './components/App/App.css'

(async () => {
    await App.render();
    Comics.eventListener();
})()