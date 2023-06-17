const express = require("express");
const { auth } = require("../middlewares/auth");
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksControllers");

const { validateBody } = require("../utils/validateBody");
const {
  createTaskValidationSchema,
  updateTaskValidationSchema,
} = require("../utils/validation/tasksValidationSchemas");

const router = express.Router();
router.use(auth);

router
  .route("/")
  .get(getTasks)
  .post(validateBody(createTaskValidationSchema), createTask);
router
  .route("/:taskId")
  .get(getTask)
  .patch(validateBody(updateTaskValidationSchema), updateTask)
  .delete(deleteTask);

module.exports = {
  tasksRouter: router,
};
