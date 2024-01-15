const { Router } = require("express");
const routes = Router();
const { signup, login, createBoard } = require("./controllers/userControllers")


routes.post("/signup", signup);

routes.post("/login", login);

routes.post("/create-board", createBoard);

module.exports = routes;
