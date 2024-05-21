<?php

namespace App\Http\Controllers;

use App\Models\Szavak;


class SzavakController extends Controller
{
   public function index()
   {
      return Szavak::all();
   }
}

