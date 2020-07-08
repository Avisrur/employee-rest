const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: String },
  email: { type: String },
  role: { type: String },
});

employeeSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("employees", employeeSchema);
