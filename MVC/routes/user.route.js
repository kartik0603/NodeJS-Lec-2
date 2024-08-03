const { Router } = require("express");
const { getUser, createUser } = require("../controller/user.controller");
const userRouter = Router();

userRouter.get("/", getUser);
userRouter.post("/", createUser);

module.exports = userRouter;
