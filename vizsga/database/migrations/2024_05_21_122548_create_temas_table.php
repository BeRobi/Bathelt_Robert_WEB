<?php

use App\Models\Tema;
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
        Schema::create('temas', function (Blueprint $table) {
            $table->foreignId('id')->references('temaId')->on('szavaks');
            $table->string('temanev');
        });

        Tema::create(['id' => 1, 'temanev' => 'Állatok']);
        Tema::create(['id' => 2, 'temanev' => 'Járművek']);
        Tema::create(['id' => 3, 'temanev' => 'Utazás']);

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temas');
    }
};
