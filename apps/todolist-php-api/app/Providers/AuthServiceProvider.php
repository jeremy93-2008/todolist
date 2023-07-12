<?php

namespace App\Providers;

use App\Models\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\ServiceProvider;
use Laravel\Lumen\Http\Request;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Boot the authentication services for the application.
     *
     * @return void
     */
    public function boot()
    {
        // Here you may define how you wish users to be authenticated for your Lumen
        // application. The callback which receives the incoming request instance
        // should return either a User instance or null. You're free to obtain
        // the User instance via an API token or any other method necessary.

        $this->app['auth']->viaRequest('api', function (Request $request) {
            if($request->bearerToken()) {
                $jwtDecode = (array) JWT::decode($request->bearerToken() ?? "", new Key(env("JWT_SECRET"), "HS256"));
                $userSub = (array)$jwtDecode["sub"];
                $user = User::where('email', $userSub["email"])->first();
                if($user && $userSub["password"] === $user->password)
                    return $user;
                return null;
            }

            $array = $request->all();

            if ($array["email"] && $array["password"] ) {
                $user = User::where('email', $array['email'])->first();
                if($user && Hash::check($array['password'], $user->password))
                    return $user;
            }
            return null;
        });
    }
}
