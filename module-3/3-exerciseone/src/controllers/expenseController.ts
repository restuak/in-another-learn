import { Request, Response } from "express";
import fs from "fs";
import { Expense } from "../model/Expense";

const DATA_FILE = "./data.json";

const loadData = (): Expense[] =>
  JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
const saveData = (data: Expense[]) =>
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

export const getAllExpenses = (req: Request, res: Response) => {
  const data = loadData();
  res.json(data);
};

export const getExpenseById = (req: Request, res: Response) => {
  const data = loadData();
  const expense = data.find((e) => e.id === +req.params.id);
  expense ? res.json(expense) : res.status(404).send("Expense not found");
};

export const createExpense = (req: Request, res: Response) => {
  const data = loadData();
  const newExpense: Expense = {
    id: Date.now(),
    ...req.body,
  };
  data.push(newExpense);
  saveData(data);
  res.status(201).json(newExpense);
};

export const updateExpense = (req: Request, res: Response) => {
  const data = loadData();
  const index = data.findIndex((e) => e.id === +req.params.id);
  if (index !== -1) {
    data[index] = { ...data[index], ...req.body };
    saveData(data);
    res.json(data[index]);
  } else {
    res.status(404).send("Expense not found");
  }
};

export const deleteExpense = (req: Request, res: Response) => {
  const data = loadData();
  const newData = data.filter((e) => e.id !== +req.params.id);
  saveData(newData);
  res.sendStatus(204);
};

export const getTotalByDateRange = (req: Request, res: Response) => {
  const { start, end } = req.query;
  const data = loadData();
  const total = data
    .filter(
      (e) =>
        e.type === "expense" && e.date >= String(start) && e.date <= String(end)
    )
    .reduce((sum, e) => sum + e.nominal, 0);
  res.json({ total });
};

export const getTotalByCategory = (req: Request, res: Response) => {
  const data = loadData();
  const total = data
    .filter((e) => e.type === "expense" && e.category === req.params.category)
    .reduce((sum, e) => sum + e.nominal, 0);
  res.json({ category: req.params.category, total });
};
