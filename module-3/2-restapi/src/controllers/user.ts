import { Request, Response } from "express";

export function getAll(req: Request, res: Response) {
  // GET http://localhost:8080/users?email=budi@gmail.com&umur=22
  const { email, umur } = req.query;
  res.json({
    user: "Budi",
    email,
    umur,
  });
}
export function getById(req: Request, res: Response) {
  // GET http://localhost:8080/users/1
  const { id } = req.params;
  res.json({
    id,
  });
}

export function create(req: Request, res: Response) {
  const { email, password } = req.body;

  res.json({
    email,
    password,
  });
}
