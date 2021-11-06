/*
    A simple checker for whether the API is running succesfully
    URI: /api/healthCheck
*/
//? We usually keep this check just in the main server.js file makes it easy to see because it isnt hidden behind a route
exports.healthCheck = (req, res) => {
  console.log("Health Check Done");
  res.send(`API Running succesfully on port ${process.env.PORT}`);
};
