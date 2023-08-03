var Person = /** @class */ (function () {
    //create constructor
    function Person(name, address, mobile) {
        if (name === void 0) { name = ''; }
        if (address === void 0) { address = ''; }
        if (mobile === void 0) { mobile = 0; }
        console.log("constor insided");
        this.name = name;
        this.address = address;
        this.mobile = mobile;
    }
    //facilator/method
    Person.prototype.printInfo = function () {
        console.log("name :" + this.name);
        console.log("address :" + this.address);
        console.log("mobile :" + this.mobile);
    };
    return Person;
}());
//create instance
var p = new Person("person1", "mumbai", 76766776);
p.printInfo();
var p2 = new Person();
p2.printInfo();
