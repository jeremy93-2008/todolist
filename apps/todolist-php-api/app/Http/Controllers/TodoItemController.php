<?php

namespace App\Http\Controllers;

use App\Models\TodoItem;
use Illuminate\Http\Request;

class TodoItemController extends Controller
{
    public function show(Request $request) {
        return TodoItem::where("userId", $request->user()["id"])->get();
    }

    public function get(Request $request, string $id) {
        $singleTodoItem = TodoItem::find($id);
        if(!$singleTodoItem) return abort(400, "No todoitem id found");
        if($singleTodoItem->userId === $request->user()["id"])
            return TodoItem::find($id);
        return abort(403, "Not allowed to see this resource");
    }

    public function add(Request $request) {
        $todoItem = $request->all();
        $user = $request->user();
        return $user->todoitems()->create($todoItem);
    }

    public function edit(Request $request, string $id) {
        $newtodoItem = $request->all();
        $existingTodoItem = TodoItem::find($id);
        if(!$existingTodoItem) return abort(400, "No todoitem id found");

        $existingTodoItem->title = $newtodoItem["title"];
        $existingTodoItem->description = $newtodoItem["description"];
        $existingTodoItem->isComplete = $newtodoItem["isComplete"];
        $existingTodoItem->createdAt = $newtodoItem["createdAt"];

        return $existingTodoItem->save();
    }

    public function remove(Request $request, string $id) {
        $todoItem = TodoItem::where("id", $id)->where("userId", $request->user()["id"]);
        if(!$todoItem) return abort(400, "No todoitem id found");
        return $todoItem->forceDelete();
    }
}
