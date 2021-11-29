<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'rating',
        'comment'
    ];

    /**
     * Get the book of the page.
     */
    public function book()
    {
        return $this->belongsTo(Book::class);

    }

}
