import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from './router/router';
import { store } from '../js/store/store.js';

const app = createApp(App);
app.use(VueRouter);
app.use(store);

app.mount('#app');

require('./bootstrap');