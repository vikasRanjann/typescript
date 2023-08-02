function fu()
{
    //implicit declaration 
// type of refrence
let num  = 100;
console.log(`num :${num},type :${typeof(num)}`)

console.log(`data :${num}`)
}
//fu()

function function2()
{

let person:object = {
    "name":"vikash",
    "age":40,

}
let mobile :{name:string,modal:string,price:number } = {
    name : "Iphone",modal:'10',price:400
}
console.log(mobile)
console.log(person)

}
//function2()



function function3()
{

    //union
    let num:number|string = 100;
    num = "vikash"
    console.log(`num :${num}`)

    let response:any = 10;

    response = true;
    console.log(`response :${response}`)


}
function3()


