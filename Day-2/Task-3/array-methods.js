//3.1: Find number 2 in the following array. If 2 is present, print its index in the array. If 2 is not present, display the message "Element not found in array". const arr = [1, 2, 3, 4, 5, 6];

const arr = [1, 2, 3, 4, 5, 6];

const index = arr.indexOf(2);

if (index !== -1) {
    console.log(`Index of 2 in the array is: ${index}`);
} else {
    console.log("Element not found in array");
}



//3.2: Remove "apple" from the following array: const fruits = ["banana", "mango", "apple", "kiwi"];

const fruits = ["banana", "mango", "apple", "kiwi"];
fruits.splice(2,1);
console.log("Spliced Array is: ",fruits);


//3.3: Reverse the order of the elements in the following array: const numbers = [23, 45, 12, 67, 89, 34];

const numbers = [23, 45, 12, 67, 89, 34];
numbers.reverse();
console.log("Reversed Array is: ",numbers);



//3.4: Find the maximum value in the following array: const numbers = [23, 45, 12, 67, 89, 34];

const numbers1 = [23, 45, 12, 67, 89, 34];
numbers1.sort()
numbers1.reverse()
console.log("Maximum value in the array is : ",numbers1[0])


//3.5: Create a function that takes an array of numbers and returns the second-largest number in the array: const numbers = [10, 5, 8, 20, 15, 12];

const numbers2 = [10, 5, 8, 20, 15, 12];

function findSecondLargest(numbers2) {

    const sortedNumbers = numbers2.sort((a, b) => b - a);
    
    return sortedNumbers[1];
}

const secondLargest = findSecondLargest(numbers2);
console.log("The second-largest number is:", secondLargest);




//3.6: Create a function that takes an array of numbers and returns the sum of all even numbers in the array: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumOfEvenNumbers(numbers3) {
    let sum = 0;
    for (let i = 0; i < numbers3.length; i++) {
        if (numbers3[i] % 2 === 0) { 
            sum += numbers3[i];
        }
    }
    return sum;
}

const result = sumOfEvenNumbers(numbers3);
console.log("The sum of all even numbers in the array is:", result);