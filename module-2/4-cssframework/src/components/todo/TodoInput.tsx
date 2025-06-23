"use client";

import { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  return (
    <div className="flex w-full mb-4">
      <input
        type="text"
        className="flex-1 p-4 rounded-l-md border"
        placeholder="Create a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 rounded-r-md"
      >
        Add
      </button>
    </div>
  );
}
