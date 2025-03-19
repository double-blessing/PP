var myName = "ALice";
const PI = 3.14;
function printAge(age) {
    let age = 25;
}
//var, let and const are use to initalization but the differences is that;
// VAR are use to declare most of the global variable
//CONST are use for element that are not going to change all through the program
//Let are mostly suitable for localvariable declaration but it can also be use for global variable declaration

//Boolean and assignment operators

if (10 > 5 && 3 ==="3") {
    return result;
}
"hello" || 0 && NaN;

//swaping of values
var a = 5;
var b = 10;
function swappingVar(a, b) {
    let a = 10;
    let b = 5;
}
(a, b) = (b,a);

//nested IF-ELSE
function ifElse(num) {
    let num = 12;
if (num > 10) {
    return "It is even and greater than"
}else if (num < 5) {
    return "It is not a odd number and it is greater than 5"
}else{
    return "They are not equal"
}
}

//While loop
var myArr = [];

var i = 10;
while(i > 0) {
    myArr.push(i);
    i--;
}
//use a do while loop to ask the user to input till he enters quit
do{
    user = prompt("input quit: \n. quit");
}while (user == "quit");

// section 3: no6; Nested For Loop
var myArray = [];

for (var i = * i < 4; i++) {
    myArray.push(i);
}

//global variable
let taxRate = 0.1;

function calculate() {
    let price = 100;
    let totalPrice = price + (price * taxRate);
    
    return totalPrice;
}

//question 8
let balance = 1000;
let choice;

do {
    // Display menu
    choice = prompt("Choose an option:\n1. Deposit\n2. Withdraw\n3. Balance\n4. Exit");

    switch (choice) {
        case "1": // Deposit
            let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
            if (depositAmount > 0) {
                balance += depositAmount;
                alert("Deposit successful! New balance: " + balance);
            } else {
                alert("Invalid amount.");
            }
            break;

        case "2":
            let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
            if (withdrawAmount > 0) {
                if (withdrawAmount <= balance) {
                    balance -= withdrawAmount;
                    alert("Withdrawal successful! New balance: " + balance);
                } else {
                    alert("Insufficient balance.");
                }
            } else {
                alert("Invalid amount.");
            }
            break;

        case "3":
            alert("Your current balance is: " + balance);
            break;

        case "4": 
            alert("Exiting program.");
            break;

        default:
            alert("Invalid choice. Please enter 1, 2, 3, or 4.");
    }
} while (choice !== "4");
