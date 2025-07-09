import { Router, Request, Response, NextFunction } from "express";
import { getAll, getById, create } from "../controllers/user";

const router = Router();

router.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      throw new Error("oopss");
    } catch (err) {
      next(err);
    }
  },
  getAll
);

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);

export default router;
