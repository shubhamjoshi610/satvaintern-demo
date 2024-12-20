myFunction = () =>{
    document.getElementById("dbl").innerHTML = "double click event demo done";
}

confirmInput =()=>{
    const fname = document.forms[0].fname.value;
    alert("your response has been taken successfully")
}

function arithmeticOperations(a, b) {
    const sum = a + b;
    const difference = a - b;
    const product = a * b;
    const division = b !== 0 ? a / b : "Division by zero is not allowed.";

    return { sum, difference, product, division };
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("results").innerText = "Please enter valid numbers.";
        return;
    }

    const results = arithmeticOperations(num1, num2);
    document.getElementById("results").innerHTML = `
        Sum: ${results.sum} <br>
        Difference: ${results.difference} <br>
        Product: ${results.product} <br>
        Division: ${results.division}
    `;
}

const person = {
    firstName: "shubham",
    lastName: "joshi",
    age: 20,
    eyeColor: "black",
    display: function(){
        document.getElementById("obj").innerHTML = this.firstName + " is " + this.age + " years old.";
    }
  };

const d = new Date();
document.getElementById("date").innerHTML = d;

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

document.getElementById("array1").innerHTML = "Array 1: " + array1;
document.getElementById("array2").innerHTML = "Array 2: " + array2;

const resultArray = array1.concat(array2);

document.getElementById("arr").innerHTML = "Concatenated Array: " + resultArray;

function loopString() {
    let result = '';
    const myString = "Hello World!";
    for (let i = 0; i < myString.length; i++) {
        result += "Character " + (i+1) + ": " + myString[i] + "<br>";
    }
    document.getElementById("strlt").innerHTML = result;
}


function loopArray() {
    let result = '';
    const myArray = [10, 20, 30, 40, 50]; 
    let i = 0;
    while (i < myArray.length) {
        result += "Element " + (i + 1) + ": " + myArray[i] + "<br>";
        i++;
    }
    document.getElementById("arrayRes").innerHTML = result;
}