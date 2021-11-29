<template>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        <div class="flex place-content-end mb-4">
        <div class="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
            <router-link :to="{ name: 'books.create' }" class="text-sm font-medium">Create book</router-link>
        </div>
    </div>

       <div class="grid grid-cols-3 gap-4">
            <div v-for="book in books" :key="book.id">
                <div class="cursor-pointer bg-gray-200 w-full flex flex-col justify-center items-center p-4">
                    <div class="bg-white text-black w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                        <div class="flex items-center justify-between">
                        <div class="flex items-left space-x-4">
                            <div class="rounded-full w-4 h-4 border border-purple-500"></div>
                            <div class="text-md font-bold">{{ book.title}}</div><br />
                        </div>
                        </div>
                        <div class="mt-4 text-gray-500 font-bold text-sm">
                        # {{ book.subtitle}}
                        </div>
                        <div class="mt-4 text-gray-500 font-bold text-sm">
                        published: {{ book.year}}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
// Here we're using a Composable file here, its code is above
import useBooks from '../../composables/books';

// onMounted will define what method to "fire" automatically
import { onMounted } from 'vue';

export default {
    // This is a Vue 3 syntax to define the component setup()
    setup() {
        // We need only two things from the useCompanies() composable
        const { books, getBooks } = useBooks()

        // We get the series immediately
        onMounted(getBooks)

        return {
            books, // and return them to use in <template>
        }
    }
}
</script>
