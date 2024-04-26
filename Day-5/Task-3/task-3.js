// Task-3:

// Create a div with "demo text" inside it now when I click on that div the text should get changed to "I got clicked" 
// and change the backgroud color of that div to pink.


let demoDiv = document.getElementById("demoDiv");


demoDiv.addEventListener("click", function() {
    
    this.textContent = "I got clicked";
    
    this.style.backgroundColor = "pink";
});