"use client";

import { TodoItem } from "@/types";
import { useState } from "react";

interface Props {
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
}

export default function TodoList({ todos, setTodos }: Props) {
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="bg-white rounded-md shadow-md w-full max-w-xl">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center p-4 border-b hover:bg-gray-50"
        >
          <input
            type="checkbox"
            className="mr-4"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span
            className={`flex-1 ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
        </div>
      ))}

      <div className="flex justify-between p-4 text-sm text-gray-500">
        <span>{todos.filter((t) => !t.completed).length} items left</span>
        <button onClick={clearCompleted} className="hover:underline">
          Clear Completed
        </button>
      </div>
    </div>
  );
}
