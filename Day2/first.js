
//object using json
const person = {
    "name":"vikash",
    "age":24,
    "address":"mumbai"
}
// console.log(person)

//object using Object
const mobile = new Object()
mobile.name = "iphone",
mobile.model = "xr",
mobile.price = 45455

// console.log(mobile)

//object using constructor function
function Car(name,modal,price)
{
    this.name = name,
    this.modal = modal,
    this.price = price

}
Car.prototype.printInfo = function()
{
    console.log(`name :${this.name}`)
    console.log(`modal :${this.modal}`)
    console.log(`price :${this.price}`)
}

const car1 = new Car("maruti","alto",67666)
console.log(car1)
car1.printInfo()


