const { userModel } = require("../schema");
const { createRandomUserName } = require("../utils/createRandomUserName");
exports.createUserServices = async (req) => {
  try {
    let userInfo = req.body;
    let fullName = userInfo.fullName;

    let userName = createRandomUserName(fullName);

    userInfo.userName = userName;

    const result = await userModel.create(userInfo);

    if (result["_id"]) {
      return {
        status: "success",
        message: "Account created successfully",
        userName: userName,
        userId: result._id,
        fullName: result.fullName,
      };
    }
  } catch (err) {
    return err.message;
  }
};
