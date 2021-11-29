<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($x = 0; $x <= 10; $x++) {
            DB::table('users')->insert([
                'name' => "john smith {$x}",
                'email' => "johnsmith{$x}@gmail.com",
                'password' => Hash::make('password'),
            ]);
        }

    }
}
