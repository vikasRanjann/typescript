function function1(num, num1) {
    var result = num + num1;
    console.log("result :" + result + ",type :" + typeof (result));
}
//function1(10,20)
//function1(10,20)
function function2() {
    var num = "vikash";
    num = undefined;
    console.log(num);
}
//function2()
function function3() {
    throw new Error("this created error");
}
// function3()
//enum
function function4() {
    //enum
    var color;
    (function (color) {
        color[color["red"] = 0] = "red";
        color[color["blue"] = 1] = "blue";
        color[color["black"] = 2] = "black";
    })(color || (color = {}));
    // //explicity declaration
    // const red:color = color.red
    // const blue:color = color.blue
    // //implicity declaration
    // const Colorred = color.red
    // const ColorBlack = color.black
}
// function4()
