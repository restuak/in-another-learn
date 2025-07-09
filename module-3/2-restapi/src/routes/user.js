"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    try {
        throw new Error("oopss");
    }
    catch (err) {
        next(err);
    }
}, user_1.getAll);
router.get("/", user_1.getAll);
router.get("/:id", user_1.getById);
router.post("/", user_1.create);
exports.default = router;
