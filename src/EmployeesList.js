class EmployeesList {

    constructor(list) {
        this.list = [...list];
    }

    getList() {
        return this.list;
    }

    filterbyAgeGreaterThanOrEqualTo(age) {
        this.list = this.list.filter((employee) => employee.age >= age);
        return this;
    }
}

module.exports = EmployeesList;
