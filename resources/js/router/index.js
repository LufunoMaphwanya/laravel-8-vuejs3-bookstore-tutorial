import { createRouter, createWebHistory } from 'vue-router'

import BooksIndex from '../components/books/BooksIndex.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'books.index',
        component: BooksIndex
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
