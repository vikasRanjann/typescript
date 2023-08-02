function fu() {
    //implicit declaration 
    // type of refrence
    var num = 100;
    console.log("num :" + num + ",type :" + typeof (num));
    console.log("data :" + num);
}
//fu()
function function2() {
    var person = {
        "name": "vikash",
        "age": 40
    };
    var mobile = {
        name: "Iphone", modal: '10', price: 400
    };
    console.log(mobile);
    console.log(person);
}
//function2()
function function3() {
    //union
    var num = 100;
    num = "vikash";
    console.log("num :" + num);
    var response = 10;
    response = true;
    console.log("response :" + response);
}
function3();
