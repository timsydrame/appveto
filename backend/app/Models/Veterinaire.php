<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Veterinaire extends Model
{
    use HasFactory;

    protected $table = 'veterinaires';

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'adresse',
        'password',
    ];

    protected $hidden = [
        'password'
    ];

}
