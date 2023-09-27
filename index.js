const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

app.get("/", (request, response) => {
  response.send("This is a GET request");
});

app.post("/", (request, response) => {
  response.send("This is a POST request");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
