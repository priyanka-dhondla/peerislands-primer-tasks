// Task-4 :

// Create a p tag inside it initially show 0. Then create 2 buttons to increment or decreament it by 1.

function increment() {
    var counter = document.getElementById("counter");
    var currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue + 1;
    counter.style.color = "green";
}


function decrement() {
    var counter = document.getElementById("counter");
    var currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue - 1;
    counter.style.color = "red";
}

