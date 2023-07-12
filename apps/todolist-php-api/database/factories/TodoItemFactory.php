<?php

namespace Database\Factories;

use App\Models\TodoItem;
use Illuminate\Database\Eloquent\Factories\Factory;

class TodoItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = TodoItem::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->words(2, true),
            'description' => $this->faker->words(2, true),
            'isComplete' => $this->faker->boolean(),
            'createdAt' => $this->faker->dateTimeThisMonth(),
            'userId' => 1
        ];
    }
}
