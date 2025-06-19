"use client"

import {useState, useCallback} from "react";

export default function useCallback() {
    const [count, setCount] = useState<number>(0);
    const [todos, setTodos] = useState<string[]>([]);

    return (
      <div className="container ml-0 mr-0 ">
        <div></div>
      </div>
    );
}