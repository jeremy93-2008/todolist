<?php

namespace App\Http\Controllers;


use App\Models\User;
use Firebase\JWT\JWT;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\Request;

class TokenController extends Controller
{
    protected function jwt(User $user): string
    {
        $payload = [
            'iss' => "Jeremy Auvray", // Issuer of the token
            'sub' => $user, // Subject of the token
            'iat' => time(), // Time when JWT was issued.
            'exp' => time() + 60*60 // Expiration time
        ];

        return JWT::encode($payload, env('JWT_SECRET'), "HS256");
    }
    public function newToken(Request $request): string
    {
        return $this->jwt($request->user());
    }
}
