import { createApp } from 'vue';
import ExampleComponent from '../js/components/ExampleComponent.vue';
import VueRouter from 'vue-router';

createApp(ExampleComponent).use(VueRouter).mount("#app");

require('./bootstrap');