const express = require("express");
const morgan = require("morgan");

const usersData = require("./users.json");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/allUsers", (request, response) => {
  response.json(usersData.users);
});

app.get("/user/:id", (request, response) => {
  const user = usersData.users[request.params.id - 1];
  if (user) {
    response.json(user);
  } else {
    response.status(404).json({ message: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}\n`);
});
