const { expect } = require("chai");

describe("companyAdministration", () => {
    describe("hiringEmployee", () => {
        it("Position is not Programmer", () => {
            expect(() => companyAdministration.hiringEmployee("a", "a", 1)
                .to.throw("We are not looking for workers for this position."));
        });
        it("Check if experience is below 3", () => {
            expect(() => companyAdministration.hiringEmployee("a", "Programmer", 1)
                .to.equal(`a is not approved for this position.`));
        });
        it("A was successfully hired for the position Programmer.", () => {
            expect(() => companyAdministration.hiringEmployee("A", "Programmer", 3)
                .to.equal(`A was successfully hired for the position Programmer`));
        });
        it("Check if experience is over 3", () => {
            expect(() => companyAdministration.hiringEmployee("A", "Programmer", 5)
                .to.equal(`A was successfully hired for the position Programmer`));
        });
    });
    describe("calculateSalary", () => {
        it("Check if hours is number", () => {
            expect(() => companyAdministration.calculateSalary("a")
                .to.throw("Invalid hours"));
        });
        it("Check if hours is negative number", () => {
            expect(() => companyAdministration.calculateSalary(-1)
                .to.throw("Invalid hours"));
        });
        it("Check if hours is valid and below 160", () => {
            expect(companyAdministration.calculateSalary(100)
                .to.equal(15 * 100));
        });
        it("Check if hours is valid and greater than 160", () => {
            expect(companyAdministration.calculateSalary(161)
                .to.equal(15 * 161 + 1000));
        });
        it("Check if hours is valid and equal to 160", () => {
            expect(companyAdministration.calculateSalary(160)
                .to.equal(15 * 160));
        });
    });
    describe("firedEmployee", () => {
        it("Check invalid inputs", () => {
            expect(() => companyAdministration.firedEmployee(1, 1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee([], "1")).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee([], -1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["Peter"], 1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["Peter"], [])).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee("1", 1)).to.throw("Invalid input");
        });
        it("Check with valid inputs", () => {
            expect(companyAdministration.firedEmployee(["Peter", "Ivan"], 1))
                .to.equal("Peter");
            expect(companyAdministration.firedEmployee(["Peter", "Ivan", "Pesho"], 0))
                .to.equal("Ivan", "Pesho");
        });
    });
});