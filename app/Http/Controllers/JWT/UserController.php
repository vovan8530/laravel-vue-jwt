<?php

namespace App\Http\Controllers\JWT;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;


class UserController extends Controller
{


    public function store(UserRequest $request)
    {
        $data = $request->validated();
        if (User::first()->where('email', $data['email'])->exists()) {
            return response()->json(['error' => 'Email already exists'], 403);
        }
        $user = User::create($data);
        $token = auth()->tokenById($user->id);
        return response([$token]);
    }
}
