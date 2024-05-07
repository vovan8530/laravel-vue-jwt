<?php

namespace App\Http\Controllers;

use App\Http\Resources\FruitResource;
use App\Models\Fruit;

class FruitController extends Controller
{
    public function __invoke()
    {
        return FruitResource::collection(Fruit::all());
    }
}
