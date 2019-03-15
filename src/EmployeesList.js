class EmployeesList {

    constructor(list) {
        this.list = [...list];
    }

    getList() {
        return this.list;
    }

    filterbyAgeGreaterThanOrEqualTo(age) {
        return this;
    }
}

module.exports = EmployeesList;
