const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const errorHandler = require("./helpers/error-handler");

const port = process.env.PORT || 5000;

app.use("/employee", require("./controllers/employee-controller"));

app.use(errorHandler);

const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
