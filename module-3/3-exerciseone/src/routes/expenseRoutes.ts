import express from "express";
import {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
  getTotalByDateRange,
  getTotalByCategory,
} from "../controllers/expenseController";

const router = express.Router();

router.get("/", getAllExpenses);
router.get("/:id", getExpenseById);
router.post("/", createExpense);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);
router.get("/total/date-range/query", getTotalByDateRange);
router.get("/total/category/:category", getTotalByCategory);

export default router;
