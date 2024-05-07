<?php

namespace App\Http\Controllers\JWT;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{


    public function store(UserRequest $request)
    {
        $data = $request->validated();
        $user = User::firstOrCreate(['email' => $data['email']], $data);
        return new UserResource($user);
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}
