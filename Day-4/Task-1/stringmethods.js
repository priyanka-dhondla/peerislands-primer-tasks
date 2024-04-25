// Task 1.1:  Remove 'e' from the following string:

const str = "abcedgedcve";

const modifiedStr=str.replaceAll("e","");
console.log("Modified String is",modifiedStr);



// Task-1.2:  Convert the following string into an array:

const str1 = "Hello there I am jack";
const strArray=str1.split(" ");
console.log("Array string is",strArray);



// Task-1.3:-Check if the given string is a palindrome or not:

const str3 = "racecar";
const revstr=str3.split("").reverse().join("")
//console.log(revstr)
if(str3===revstr){
    console.log("Given string is Palindrome")
}else{
    console.log("Given string is not a Palindrome")
}



//Task-1.4:Create a function that takes a string and returns the number of vowels in the string:

const str4 = "Hello, World!";
function vowelsCount(str4){
    const vowels="aeiouAEIOU"
    let count=0;
    for(char of str4){
        if (vowels.includes(char)){
            count++;
        }

    }
    return console.log("Count of vowels are:",count);
}
vowelsCount(str4);



//Task-1.5:Write a function to check if a given string is a valid email address:

const email1 = "example@example.com";
const email2 = "invalid@email";

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (isValid) {
        console.log(`${email} is a valid email address.`);
    } else {
        console.log(`${email} is Invalid email address.`);
    }

    return isValid;
}

isValidEmail(email1); 
isValidEmail(email2); 



//Task-1.6: . Reverse the given string:

const str6 = "Hello  World!";
const reverseStr=str6.split(" ").reverse().join(" ");
console.log(`Reverse string is ${reverseStr}`);



//Task-1.7:. Convert the given string to uppercase:

const str7 = "hello, world";
const upperCase=str7.toUpperCase();
console.log(`Uppercase of string is : ${upperCase}`);



//Task-1.8: Count the number of occurrences of a specific character in a string:

const str8 = "hello world";
const char1 = "l";
let count1=0;

for(let i=0;i<str8.length;i++){
    if(str8[i]===char1){
        count1++;
    }
}
console.log(`Occurance of character ${char1} is ${count1}` );



//Task-1.9:. Replace all occurrences of a specific substring with another substring:

const str9 = "The quick brown fox jumps over the lazy dog";
const substr1 = "brown";
const substr2 = "red";

const modifiedStr1=str9.replaceAll(substr1,substr2);
console.log("New string is",modifiedStr1);



//Task-10:Check if a string starts with a specific substring:

const str10 = "Hello, World!";
const substr3= "Hello";

if(str10.startsWith(substr3)){
    console.log(`Given string is starts with ${substr3}`)
}else{
    console.log(`Given string is doen't starts with ${substr3}`)
}



//Task-1.11: Check if a string ends with a specific substring:

const str11 = "Hello, World!";
const substr4 = "World!";

if(str10.endsWith(substr4)){
    console.log(`Given string is ends with ${substr4}`)
}else{
    console.log(`Given string is doen't ends with ${substr4}`)
}



//Task-1.12:  Extract a substring from a string:

const str12 = "Hello, World!";
const start = 7;
const end = 12;

const subString=str12.slice(start,end);
console.log(`subString is ${subString}`);



//Task-1.13: Trim leading and trailing whitespaces from a string:

const str13 = "   Hello, World!   ";
const trimStr=str13.trim();
console.log(`After trim the given string is ${trimStr}`);



//Task-14: Convert a string to an array of characters:

const str14 = "Hello, World!";
const stringArray=str14.split('');
console.log("Required Array of elements are: ",stringArray)



//Task-15: Concatenate two or more strings:

const stra = "Hello, ";
const strb = "World!";
const strc = " How are you?";

const concatedStr=stra.concat(strb,strc);
console.log("concated string is",concatedStr);



//Task-16: Capitalize the first letter of each word in the given string: 

var str16="Hello, World";
let words=str16.split(" ")

for (let i=0;i<words.length;i++){
    words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
}


const capitalizeStr=words.join(" ");
console.log(`Output after capitalize the first letter is ${capitalizeStr}`)
