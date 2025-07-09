"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = getAll;
exports.getById = getById;
exports.create = create;
function getAll(req, res) {
    // GET http://localhost:8080/users?email=budi@gmail.com&umur=22
    const { email, umur } = req.query;
    res.json({
        user: "Budi",
        email,
        umur,
    });
}
function getById(req, res) {
    // GET http://localhost:8080/users/1
    const { id } = req.params;
    res.json({
        id,
    });
}
function create(req, res) {
    const { email, password } = req.body;
    res.json({
        email,
        password,
    });
}
