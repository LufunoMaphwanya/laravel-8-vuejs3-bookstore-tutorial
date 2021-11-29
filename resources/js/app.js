require('./bootstrap');

require('alpinejs');

import { createApp } from 'vue';
import router from './router'

import BooksIndex from './components/books/BooksIndex.vue';

createApp({
    components: {
        BooksIndex
    }
}).use(router).mount('#app')
