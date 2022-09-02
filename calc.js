
let num1 = 45
let num2 = 12

document.getElementById("number1").textContent = num1

document.getElementById("number2").textContent = num2

let result = document.getElementById("total")

function more(){
    let output = num1 + num2 
    result.textContent =  " Sum :" + output

}
 function less(){
    let output = num1 - num2
    result.textContent = "Sum :" + output
 }

function mult(){
    let output = num1 * num2
   result.textContent = "Sum :" + output
}

function div(){
    let output = num1 / num2
    result.textContent = "Sum :" + output
}