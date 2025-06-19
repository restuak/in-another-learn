"use client";

import { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/input";
export default function UseRef() {
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div className="container flex flex-col justify-center items-center mr-auto ml-auto">
      <Input type="text" placeholder="Type Text" ref={inputRef} />
      <Button onClick={() => console.log(inputRef.current?.value)}>
        Click
      </Button>
    </div>
  );
}
