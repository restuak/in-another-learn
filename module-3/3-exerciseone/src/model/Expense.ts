export interface Expense {
  id: number;
  title: string;
  nominal: number;
  type: "income" | "expense";
  category: "salary" | "food" | "transport" | string;
  date: string; // format: YYYY-MM-DD
}
