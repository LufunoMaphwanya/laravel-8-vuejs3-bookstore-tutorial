import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useBooks() {
    const books = ref([])
    const book = ref([])
    const router = useRouter()
    const errors = ref('')

    const getBooks = async () => {
        let response = await axios.get('/api/books')
        books.value = response.data.data;
    }

    const getBook = async (id: number) => {
        let response = await axios.get('/api/books/' + id)
        book.value = response.data.data;
    }

    const storeBook = async (data: object) => {
        errors.value = ''
        try {
            await axios.post('/api/books', data)
            await router.push({name: 'books.index'})
        } catch (e: any) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateBook = async (id: number) => {
        errors.value = ''
        try {
            await axios.put('/api/books/' + id, book.value)
            await router.push({name: 'books.index'})
        } catch (e: any) {
            if (e.response.status === 422) {
               errors.value = e.response.data.errors
            }
        }
    }

    const destroyBook = async (id: number) => {
        await axios.delete('/api/books/' + id)
    }


    return {
        books,
        book,
        errors,
        getBook,
        getBooks,
        storeBook,
        updateBook,
        destroyBook
    }
}
