const EmployeesList = require('./EmployeesList');

function getAllowedToWorkOnSundays (initialEmployeesList) {
    const employeesList = new EmployeesList(initialEmployeesList);

    return employeesList
            .filterbyAgeGreaterThanOrEqualTo(18)
            .orderByName()
            .capitalizeNames()
            .getList();
};

module.exports = getAllowedToWorkOnSundays;
