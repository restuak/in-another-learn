// import express, { Request, Response } from "express";
import express, { NextFunction, Request, Response } from "express";
import useRoute from "./routes/user";

const PORT = 8080;
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use((req:Request, res:Response, next:NextFunction) => {
    console.log("Middleware 1");
    next();
});

// app.get("users", (req: Request, res: Response) => {
//   res.json({
//     user: "Budi",
//   });
// });

app.use("/users", useRoute);



// ERROR HANDLING MIDDLEWARE
app.use((err: Error, re: Request, res: Response, next: NextFunction) => {
  res.status(500).send(err?.message);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
