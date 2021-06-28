const {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("./model/userModel");
const {
  getAllMovies,
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("./model/movieModel");

const connection = require("./db-config");
const express = require("express");
const app = express();
const Joi = require("joi");

const port = process.env.PORT || 3000;

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log("connected as id " + connection.threadId);
  }
});

app.use(express.json());

app.get("/api/movies", getAllMovies);

app.get("/api/movies/:id", getMovie);

app.get("/api/users", getAllUsers);

app.get("/api/users/:id", getUser);

app.post("/api/movies", addMovie);

app.post("/api/users", addUser);

app.put("/api/users/:id", updateUser);

app.put("/api/movies/:id", updateMovie);

app.delete("/api/users/:id", deleteUser);

app.delete("/api/movies/:id", deleteMovie);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
