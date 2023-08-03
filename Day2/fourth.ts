
class Person{

    name:string
    address:string
    mobile:number


    //create constructor

    constructor(name:string = '',address:string = '',mobile:number = 0)
    {
        console.log(`constor insided`)
        this.name = name
        this.address =  address
        this.mobile = mobile
    }


    //facilator/method
    printInfo()
    {
        console.log(`name :${this.name}`)
        console.log(`address :${this.address}`)
        console.log(`mobile :${this.mobile}`)

    }
}


//create instance

//object passing parameter
const p = new Person("person1","mumbai",76766776)
p.printInfo()

//object without passing parameter 
const p2 = new Person()
p2.printInfo()