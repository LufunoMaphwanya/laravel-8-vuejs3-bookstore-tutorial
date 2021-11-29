<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $authors = [
            'Robert Green',
            'Robert Frost',
            'Robert King',
            'Stephen King',
            'David Arnham King',
            'Fred Terry Jr',
            'Steph Cameron',
            'Chinua Achebe',
        ];

        foreach ($authors as $author) {
            DB::table('authors')->insert([
                'name' => $author,
                'bio' => Str::random(200),
            ]);
        }

    }
}
