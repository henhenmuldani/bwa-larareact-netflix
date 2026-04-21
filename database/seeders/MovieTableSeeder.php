<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://example.com/shawshank-redemption.mp4',
                'thumbnail' => 'https://example.com/shawshank-redemption.jpg',
                'rating' => 4.3,
                'is_featured' => true,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Crime',
                'video_url' => 'https://example.com/the-godfather.mp4',
                'thumbnail' => 'https://example.com/the-godfather.jpg',
                'rating' => 4.2,
                'is_featured' => true,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://example.com/the-dark-knight.mp4',
                'thumbnail' => 'https://example.com/the-dark-knight.jpg',
                'rating' => 4.0,
                'is_featured' => false,
            ],
        ];

        Movie::insert($movies);
    }
}
