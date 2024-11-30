  //SYNTAX

//single-line comment
/* multi-line comment */

console.log("hello, Word!"); // outputs:Hello, World!

// variables
// IN JavaScript you can declare variables using Var,let,or const
//Example
let name = "Japhes"; // a variable that can chage
const age = 25; //A variable that cannot chage
var country = "Kenya"; // a variable that can chage
console.log(name, age,country);


//Data types
// primitave Types (string, number, boolean)
//Non primitive (objects, arrays, functions)
let str = "hello"; //string
let num = 10;  //number
let bool = true; //boolean
let und;          //undefined
let empty = null;  //null
let odbj = {key: "value"}; //object
console.log(typeof str, typeof num, typeof bool);

//Arithmetic operations
//+,-,*,/,%, etc
 let sum = 5 + 3; //8
 let diff = 5 - 3; //2
 let prod = 5 * 3; //15
 let quot = 5 / 3; //1.6666666666666667
 let mod = 5 % 3; //2

//Comparison operators
// ==,===,!=,!==,<,<=,>,>=
console.log(5 == "5"); //true (loose equality)
 console.log(5 === "5"); //false (strict equality)

 //Logical operators
 //&&(ADD),&&(SUB),&&(MUL),&&
 //||(OR),!(NOT)
let x = 10, y=5;
console.log(x>5 && y<10); // true
console.log(!(x>y)); // false))

//     CONTROL FLOWS
//conditional statements

//if statement excutes a block of code if condiion is true

let score = 14;
if(score >= 90) {
    console.log("Grade: A");
}else if (score >=75){
    console.log("Grade: B");
}else if (score >=55){
    console.log("Grade: C");

}else{
    console.log("Grade: F");
}

//switch statement used to perform actions based on multiple conditions
let day =3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//   LOOPS excecute a block of code repeatdly

//for loop repeats a block of code a specific number of times

for (let i = 0; i< 5; i++) {
    console.log(i);
}

// While loop repeats a block of code while a condition is true
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}


//JavaScript logic of simple calculator

function appendValue(value) {      
    document.getElementById("result").value += value;
  }

  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function calculateResult() {
    try {
      let result = eval(document.getElementById("result").value);
      document.getElementById("result").value = result;
    } catch (error) {
      alert("Invalid Expression");
    }
  }

  