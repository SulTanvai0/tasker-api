exports.welcomeRes = async (req, res) => {
  res.status(200).json({
    status: "Successful",
    message: "Welcome to tsaker api",
  });
};
