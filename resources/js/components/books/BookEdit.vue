
<template>
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
    </div>

    <form class="space-y-6" v-on:submit.prevent="saveBook">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">Year</label>
                <div class="mt-1">
                    <input type="text" name="title" id="title"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="book.title">
                </div>
            </div>
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <div class="mt-1">
                    <input type="text" name="title" id="title"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="book.title">
                </div>
            </div>

            <div>
                <label for="subtitle" class="block text-sm font-medium text-gray-700">Subtitle</label>
                <div class="mt-1">
                    <input type="text" name="subtitle" id="subtitle"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="book.subtitle">
                </div>
            </div>
        </div>

        <button type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Save
        </button>
    </form>
</template>

<script lang='ts'>
import useBooks from '../../composables/books'
import { onMounted } from 'vue';

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },

    setup(props: any) {
        const { errors, book, updateBook, getBook } = useBooks()

        onMounted(() => getBook(props.id))

        const saveBook = async () => {
            await updateBook(props.id)
        }

        return {
            errors,
            book,
            saveBook
        }
    }
}
</script>
