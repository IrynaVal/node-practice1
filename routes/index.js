const { Router } = require("express");
const { authRouter } = require("./authRouter");
const { tasksRouter } = require("./tasksRouter");

const router = Router();

router.use("/tasks", tasksRouter);
router.use("/auth", authRouter);

module.exports = {
  rootRouter: router,
};
