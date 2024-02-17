const { welcomeRes } = require("../controllers/welcomeRes");
const { createUser } = require("../controllers/userController");
const {
  createTask,
  updateTask,
  deleteTask,
  deleteAllTask,
  searchTask,
  getTasks,
} = require("../controllers/taskControllers");

module.exports = {
  createUser,
  welcomeRes,
  createTask,
  updateTask,
  deleteTask,
  deleteAllTask,
  searchTask,
  getTasks,
};
