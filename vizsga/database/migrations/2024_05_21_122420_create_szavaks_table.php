<?php

use App\Models\Szavak;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('szavaks', function (Blueprint $table) {
            $table->id();
            $table->string('angol');
            $table->string('magyar');
            $table->integer('temaId');
            $table->timestamps();
        });

        Szavak::create(['angol' => 'bird', 'magyar' => 'madár', 'temaId' => 1]);
        Szavak::create(['angol' => 'tiger', 'magyar' => 'tigris', 'temaId' => 1]);
        Szavak::create(['angol' => 'car', 'magyar' => 'autó', 'temaId' => 2]);
        Szavak::create(['angol' => 'bus', 'magyar' => 'busz', 'temaId' => 2]);
        Szavak::create(['angol' => 'holiday', 'magyar' => 'nyaralás', 'temaId' => 3]);
        Szavak::create(['angol' => 'sun', 'magyar' => 'nap', 'temaId' => 3]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szavaks');
    }
};
