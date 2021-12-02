import { createRouter, createWebHistory } from 'vue-router'

import BooksIndex from '../components/books/BooksIndex.vue';
import BookCreate from '../components/books/BookCreate.vue';
import BookEdit from '../components/books/BookEdit.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'books.index',
        component: BooksIndex
    },
    {
        path: '/books/create',
        name: 'books.create',
        component: BookCreate
    },
    {
        path: '/books/:id/edit',
        name: 'books.edit',
        component: BookEdit,
        props: true
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})


