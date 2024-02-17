const { createUserServices } = require("../Services/userServices");

exports.createUser = async (req, res) => {
  const response = await createUserServices(req);

  if (response.status === "success") {
    res.status(200).json({
      status: response.status,
      message: response.message,
      userName: response.userName,
      fullName: response.fullName,
      userId: response.userId,
    });
  } else {
    res.status(404).json({
      status: "Fail",
      message: "Request declined . Error creating Account",
    });
  }
};
