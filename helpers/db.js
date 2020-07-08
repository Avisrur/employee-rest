const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
  Employee: require("../models/employee-model"),
};
