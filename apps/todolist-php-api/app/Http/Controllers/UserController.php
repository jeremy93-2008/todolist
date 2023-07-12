<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Show all users available
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function show(Request $request): \Illuminate\Database\Eloquent\Collection
    {
        return User::where("id", $request->user()["id"])->get();
    }

    public function get(Request $request) {
        return User::where("id", $request->user()["id"])->first();
    }

    public function add(Request $request) {
        $newUser = $request->all();
        return User::create([
            "name" => $newUser["name"],
            "email" => $newUser["email"],
            "password" => Hash::make($newUser['password'])
        ]);
    }
}
