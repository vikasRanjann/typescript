//create class
var Person = /** @class */ (function () {
    function Person() {
    }
    //method 
    Person.prototype.printInfo = function () {
        console.log("name :" + this.name);
        console.log("address :" + this.address);
        console.log("mobile :" + this.mobile);
    };
    return Person;
}());
//create object or instance
var persons = new Person();
persons.name = "vikash",
    persons.address = "mumbai",
    persons.mobile = 7385626305;
persons.printInfo();
