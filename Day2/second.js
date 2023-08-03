//class person
var person = /** @class */ (function () {
    function person() {
    }
    //method
    person.prototype.printInfo = function () {
        console.log("name :" + this.name);
        console.log("address :" + this.address);
        console.log("pincode :" + this.pincode);
    };
    return person;
}());
