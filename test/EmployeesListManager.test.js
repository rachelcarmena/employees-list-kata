const getAllowedToWorkOnSundaysFrom = require("../src/EmployeesListManager");

const employeesList = [
  { name: 'Max', age: 17 },
  { name: 'Sepp', age: 18 },
  { name: 'Nina', age: 15 },
  { name: 'Mike', age: 51 }
];

test('should get who is allowed to work on Sundays given a list of employees', () => {

    expect(getAllowedToWorkOnSundaysFrom(employeesList)).toEqual([{ name: 'Sepp', age: 18 }, { name: 'Mike', age: 51 }]);

});
