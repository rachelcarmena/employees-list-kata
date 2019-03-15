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

    orderByName() {
        this.list = this.list.sort((a, b) => a.name.localeCompare(b.name));
        return this;
    }

    capitalizeNames() {
        return this;
    }
}

module.exports = EmployeesList;
