
function function1(num:number ,num1:number)

{

    const result = num + num1;
    console.log(`result :${result},type :${typeof(result)}`)


}
//function1(10,20)
//function1(10,20)

function function2()
{
    let num:any = "vikash"
    num = undefined
    console.log(num)
}
//function2()


function function3():void
{

    throw new Error("this created error")

}
// function3()

//enum
function function4()
{

    //enum
    enum color {
        red,blue,black

    }

    // //explicity declaration
    // const red:color = color.red
    // const blue:color = color.blue

    // //implicity declaration

    // const Colorred = color.red
    // const ColorBlack = color.black

}
// function4()