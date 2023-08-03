
//create class

class Person{


    //attribute/data member
    name:string
    address:string
    mobile:number


    //facilator 
    printInfo()
    {
        console.log(`name :${this.name}`)
        console.log(`address :${this.address}`)
        console.log(`mobile :${this.mobile}`)
    }
}

//create object or instance
const persons = new Person()
persons.name = "vikash",
persons.address = "mumbai",
persons.mobile = 7385626305

persons.printInfo()