<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $fillable = ['content'];

    /**
     * Get the book of the page.
     */
    public function book()
    {
        return $this->belongsTo(Book::class);

    }

}
