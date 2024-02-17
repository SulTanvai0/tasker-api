const {
  createTaskServices,
  updateTaskServices,
  DeleteTaskServices,
  deleteAllTaskServices,
  searchTasksServices,
  getTasksServices,
} = require("../Services/tasksServices");

exports.createTask = async (req, res) => {
  const response = await createTaskServices(req);

  if (response.status === "success") {
    res.status(200).json({
      status: "success",
      message: response.message,
    });
  } else {
    res.status(404).json({
      status: "data creating error",
      message: " Error creating data ",
    });
  }
};

exports.updateTask = async (req, res) => {
  const response = await updateTaskServices(req);

  if (response.status === "success") {
    res.status(200).json({
      status: "success",
      message: response.message,
    });
  } else {
    res.status(404).json({
      status: "data Updating error",
      message: " Error Updating  data ",
    });
  }
};

exports.deleteTask = async (req, res) => {
  const response = await DeleteTaskServices(req);

  if (response.status === "success") {
    res.status(200).json({
      status: "success",
      message: response.message,
    });
  } else {
    res.status(404).json({
      status: "data deleting error",
      message: " Error deleting  data ",
    });
  }
};

exports.getTasks = async (req, res) => {
  const response = await getTasksServices(req);

  if (response.status === "success") {
    res.status(200).json({
      status: "success",
      message: response.message,
      data: response.data,
    });
  } else {
    res.status(404).json({
      status: "error fetching data ",
      message: " Error fetching  data ",
    });
  }
};
exports.searchTask = async (req, res) => {
  const response = await searchTasksServices(req);

  if (response.status === "success") {
    res.status(200).json({
      status: "success",
      message: response.message,
      data: response.data,
    });
  } else {
    res.status(404).json({
      status: "error fetching data ",
      message: " Error fetching  data ",
    });
  }
};

exports.deleteAllTask = async (req, res) => {
  const response = await deleteAllTaskServices(req);

  if (response.status === "success") {
    res.status(200).json({
      status: "success",
      message: response.message,
    });
  } else {
    res.status(404).json({
      status: "data deleting error",
      message: " Error deleting  data ",
    });
  }
};
