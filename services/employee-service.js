const db = require("../helpers/db");
const Employee = db.Employee;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await Employee.find();
}

async function getById(id) {
  return await Employee.findById(id);
}

async function create(employeeParam) {
  const employee = new Employee(employeeParam);
  await employee.save();
}

async function update(id, employeeParam) {
  const employee = await Employee.findById(id);

  if (!employee) throw "Employee not found";

  Object.assign(employee, employeeParam);

  await employee.save();
  return employee;
}

async function _delete(id) {
  await Employee.findByIdAndRemove(id);
}
