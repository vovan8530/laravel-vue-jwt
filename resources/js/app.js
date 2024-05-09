import './bootstrap';
import {createApp} from 'vue';

import router from './router.js';
import {store} from './store/store.js';

import App from "./components/App.vue";

const app = createApp({})
    .component('App', App)
    .use(router)
    .use(store)
    .mount('#app')

export default app
