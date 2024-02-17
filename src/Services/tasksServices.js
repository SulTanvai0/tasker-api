const { taskModel } = require("../schema");

exports.createTaskServices = async (req) => {
  try {
    const result = await taskModel.create(req.body);

    if (result) {
      return {
        status: "success",
        message: "Post create Success",
      };
    }
  } catch (err) {
    return err.message;
  }
};

exports.updateTaskServices = async (req) => {
  const postId = req.body["_id"];

  try {
    const result = await taskModel.updateOne({ _id: postId }, req.body);

    if (result) {
      return {
        status: "success",
        message: "Post update success",
      };
    }
  } catch (err) {
    return err.message;
  }
};

exports.DeleteTaskServices = async (req) => {
  const postId = req.body["PostId"];

  try {
    const result = await taskModel.deleteOne({ _id: postId }, req.body);
    if (result) {
      return {
        status: "success",
        message: "Post delete success",
      };
    }
  } catch (err) {
    return err.message;
  }
};

exports.deleteAllTaskServices = async (req) => {
  const postUserId = req.body["postUserId"];

  try {
    const result = await taskModel.deleteMany({ postUserId: postUserId });

    if (result) {
      return {
        status: "success",
        message: "All Post delete success",
      };
    }
  } catch (err) {
    return err.message;
  }
};

exports.getTasksServices = async (req) => {
  const userId = req.body["postUserId"];

  try {
    const result = await taskModel.find({ postUserId: userId });

    if (result.length > 0) {
      return {
        status: "success",
        message: "Tasks found successfully",
        data: result,
      };
    } else {
      return {
        status: "success",
        message: "No matching tasks found",
        data: [],
      };
    }
  } catch (err) {
    return {
      status: "error",
      message: err.message,
    };
  }
};

exports.searchTasksServices = async (req) => {
  const userId = req.body["postUserId"];
  const searchKeyword = { $regex: new RegExp(req.body["keyWord"], "i") };

  try {
    const result = await taskModel.find({
      postUserId: userId,
      title: searchKeyword,
    });

    if (result.length > 0) {
      return {
        status: "success",
        message: "Tasks found successfully",
        data: result,
      };
    } else {
      return {
        status: "success",
        message: "No matching tasks found",
        data: [],
      };
    }
  } catch (err) {
    return {
      status: "error",
      message: err.message,
    };
  }
};
