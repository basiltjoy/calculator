function displayValue(num) {
    let res = document.querySelector("#calculator")  //to grab input box
    res.value += num
}

//covert displayValue fn into arrow fn
// var displayValue=(num)=>calculator.value+=num 

function clearBox() {
    calculator.value = ""
}

//covert fn  into arrow fn
// var clearBox = () => calculator.value = " "

 function evaluateValue() {
    let expression = calculator.value
    let out = eval(expression)
    calculator.value = out
 }

//covert fn  into arrow fn
// var evaluateValue=()=>calculator.value=eval(calculator.value)









