import express from "express";
import bodyParser from "body-parser";
import expenseRoutes from "./routes/expenseRoutes";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use("/expenses", expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
