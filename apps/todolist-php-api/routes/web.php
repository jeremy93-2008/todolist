<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use Illuminate\Support\Facades\Auth;

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/api/user', ['middleware' => 'auth',function (\Illuminate\Http\Request $request) {
    return (new \App\Http\Controllers\UserController())->get($request);
}]);

$router->get('/api/users', ['middleware' => 'auth',function (\Illuminate\Http\Request $request) {
    return (new \App\Http\Controllers\UserController())->show($request);
}]);

$router->get('/api/todoitems', ['middleware' => 'auth',function (\Illuminate\Http\Request $request) {
    return (new \App\Http\Controllers\TodoItemController())->show($request);
}]);

$router->get('/api/singleTodoitem/{id}', ['middleware' => 'auth',function (\Illuminate\Http\Request $request, string $id) {
    return (new \App\Http\Controllers\TodoItemController())->get($request, $id);
}]);

$router->post('/api/addTodoitem', ['middleware' => 'auth',function (\Illuminate\Http\Request $request) {
    return (new \App\Http\Controllers\TodoItemController())->add($request);
}]);

$router->post('/api/editTodoitem/{id}', ['middleware' => 'auth',function (\Illuminate\Http\Request $request, string $id) {
    return (new \App\Http\Controllers\TodoItemController())->edit($request, $id);
}]);

$router->post('/api/removeTodoitem/{id}', ['middleware' => 'auth',function (\Illuminate\Http\Request $request, string $id) {
    return (new \App\Http\Controllers\TodoItemController())->remove($request, $id);
}]);

$router->post('/api/login', ['middleware' => 'auth', function(\Illuminate\Http\Request $request) {
    $tokenController = new \App\Http\Controllers\TokenController();
    return $tokenController->newToken($request);
}]);

$router->post("/api/register", function(\Illuminate\Http\Request $request) {
    return (new \App\Http\Controllers\UserController())->add($request);
});
