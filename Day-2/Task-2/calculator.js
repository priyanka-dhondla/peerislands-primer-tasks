//Task2: Calculator programme. a. Take input from user which operation he wants to perform. ("sum", "minus", "Mul") b. based on his input take the next 2 numbers. c. to perform the operation use arrow function. (for sum operation create a sum arrow function and pass 2 values to it form your main funciton and return the sum to your main function. and then console log it.)


const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;


function calculator() {
    const operation = prompt("Enter operation ('sum', 'minus', 'mul'): ");
    const num1 = parseFloat(prompt("Enter first number: "));
    const num2 = parseFloat(prompt("Enter second number: "));

    let result;
    switch (operation.toLowerCase()) {
        case 'sum':
            result = sum(num1, num2);
            break;
        case 'minus':
            result = minus(num1, num2);
            break;
        case 'mul':
            result = multiply(num1, num2);
            break;
        default:
            console.log("Invalid operation!");
            return;
    }

    console.log(`Result of ${operation}: ${result}`);
}


calculator();