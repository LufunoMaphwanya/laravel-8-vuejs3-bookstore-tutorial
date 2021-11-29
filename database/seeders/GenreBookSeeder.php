<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Genre;
use App\Models\Book;


class GenreBookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (Book::all() as $book) {
            // asign genre randomly
            $genres = Genre::inRandomOrder()->take(3);

            foreach($genres as $genre){
                DB::table('book_genre')->insert([
                    'book_id' => $book->id,
                    'genre_id' => $genre->id
                ]);
            }
        }

    }
}
