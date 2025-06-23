"use client";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/input";
import { count } from "console";

export default function UseMemo() {
  const [number, setNumber] = useState<number>(0);

  return (
    <div className="container ml-auto mr-auto">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex felx-col justify-center items-center">
          <p> number: {number}</p>
          <Button onClick={() => setNumber(number + 1)}>
            Increment Number
          </Button>
        </div>
      </div>
      <div className="flex felx-col justify-center items-center">
        <p>count: {count}</p>
        <Button onClick={() => setNumber(count + 1)}>Increment Count</Button>
      </div>
    </div>
  );
}
