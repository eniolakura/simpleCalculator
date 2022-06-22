var a = parseFloat(prompt("enter first number"))
var x = prompt("which operation would you like to perform")
var b = parseFloat(prompt("enter second number"))


let result;


if(x == "+"){
    result = a + b;
}
else if(x == "-"){
    result = a - b;
}
else if(x == "/"){
    result = a/b;
}
else if(x == "*"){
    result = a * b;
}
alert(result)
