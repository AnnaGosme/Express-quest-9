const movieRouter = require("../model/movieModel");
const userRouter = require("../model/userModel");

const setupRoutes = (app) => {
  app.use("/api/movies", movieRouter);
  app.use("/api/users", userRouter);
};

module.exports = { setupRoutes };
