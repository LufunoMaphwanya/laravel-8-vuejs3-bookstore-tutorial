require('./bootstrap');

require('alpinejs');

import router from './router';

import BooksIndex from './components/books/BooksIndex.vue';

import { createApp } from "vue";
// import Welcome from "./components/Welcome.vue";
const app = createApp({
    components: {
        BooksIndex,
    },
}).use(router).mount('#app')
