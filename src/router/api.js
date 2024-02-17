const {
  welcomeRes,
  createUser,
  createTask,
  updateTask,
  deleteTask,
  deleteAllTask,
  searchTask,
  getTasks,
} = require("../controllers");

const router = require("express").Router();

router.get("/", welcomeRes);
router.post("/create_user", createUser);
router.post("/create_task", createTask);
router.post("/update_task", updateTask);
router.post("/delete_task", deleteTask);
router.post("/deleteAll_task", deleteAllTask);
router.post("/searchByKeyWord_task", searchTask);
router.post("/getTasks", getTasks);

module.exports = router;

// body-parser cors dotenv  express express-mongo-sanitize express-rate-limit helmet hpp jsonwebtoken mongoose nodemon
