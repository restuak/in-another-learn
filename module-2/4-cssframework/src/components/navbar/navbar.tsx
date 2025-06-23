"use client";

import useAuthStore from "@/store/auth/authStore";
import Link from "next/link";
import { Button } from "../ui/button";
import "./navbar.css";

const menus = [
  {
    name: "Promise",
    path: "/hooks/promise",
  },
  {
    name: "Use Callback",
    path: "/hooks/use-callback",
  },
];

export default function Navbar() {
  const { user, clearAuth } = useAuthStore((state) => state);

  return (
    <div className="navbar">
      <div className="figtree-bold">LOGO</div>

      <div className="flex gap-1 md:gap-5">
        {menus.map((menu, idx) => (
          <Link href={menu.path} key={idx} className="flex flex-col">
            <span>{menu.name}</span>
          </Link>
        ))}
      </div>

      <div className="flex gap-1 md:gap-5">
        <span>Hello {`${user.firstname} ${user.lastname}`}</span>
        <Link href="/login">
          <button className="button figtree-normal">Login</button>
        </Link>
        <button className="button figtree-normal" onClick={() => clearAuth()}>
          Logout
        </button>
        <Button>Ini Button ShadCN</Button>
      </div>
    </div>
  );
}
