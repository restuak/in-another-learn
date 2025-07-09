"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express, { Request, Response } from "express";
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const PORT = 8080;
const app = (0, express_1.default)();
// MIDDLEWARE
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});
// app.get("users", (req: Request, res: Response) => {
//   res.json({
//     user: "Budi",
//   });
// });
app.use("/users", user_1.default);
// ERROR HANDLING MIDDLEWARE
app.use((err, re, res, next) => {
    res.status(500).send(err === null || err === void 0 ? void 0 : err.message);
});
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
