<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szavak extends Model
{
    use HasFactory;
        protected $fillable = [
            'id',
            'angol',
            'magyar',
            'temaId',
            'timestamps',
        ];
    
        public function tema()
        {
            return $this->belongsTo(Szavak::class, 'id', 'id');
        }
    }

