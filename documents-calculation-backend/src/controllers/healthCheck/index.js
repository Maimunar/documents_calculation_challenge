/*
    A simple checker for whether the API is running succesfully
    URI: /api/healthCheck
*/
exports.healthCheck = (req, res) => {
  console.log("Health Check Done");
  res.send(`API Running succesfully on port ${process.env.PORT}`);
};
