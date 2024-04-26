//Task-5 :

// Create an array with 3 userObjects: name, city , age. put those in an array.
//     Now in HTML page. Create an empty div tag: <div></div>
//     and below this div tag create an button.
//     Now when the user clicks on that button. The names present in all those 3 obj should get printed with <h1>
 
//     after clicking your div should look like this:
//     <div>
//         <h1>name<h1>
//         <h1>name<h1>
//         <h1>name<h1>
//     </div>


var users = [
    { name: "Amar", city: "London", age: 24 },
    { name: "Akbar", city: "Paris", age: 28 },
    { name: "Anthony", city: "Delhi", age: 35 }
];


function printNames() {
    var div = document.getElementById("myDiv");
    div.innerHTML = ""; 

    
    users.forEach(function(user) {
        var h1 = document.createElement("h1");
        h1.textContent = user.name;
        div.appendChild(h1);
    });
}
