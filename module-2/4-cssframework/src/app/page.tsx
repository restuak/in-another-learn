"use client";

import { useState } from "react";
import TodoInput from "@/components/todo/TodoInput";
import TodoList from "@/components/todo/TodoList";
import { TodoItem } from "@/types";

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-300 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-white mb-6">TODO</h1>
      <div className="w-full max-w-xl">
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      
    </main>
  );
}
