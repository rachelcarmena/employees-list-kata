const EmployeesList = require('../src/EmployeesList');

const initialEmployeesList = [
  { name: 'Max', age: 17 },
  { name: 'Sepp', age: 18 },
  { name: 'Nina', age: 15 },
  { name: 'Mike', age: 51 }
];

test('should get the list of employees with age greater than or equal to 18 given a initial list of employees', () => {
    const employeesList = new EmployeesList(initialEmployeesList);
    
    expect(employeesList.filterbyAgeGreaterThanOrEqualTo(18).getList())
    .toEqual([
        { name: 'Sepp', age: 18 },
        { name: 'Mike', age: 51 }
    ]);
});
