//Task-2 : 

// Create 4 divs with size 100x100px with bg-color:red;
// When I click on 1st div change the bg-color.
// When the mouse comes in the second div area change the bg-color.
// When user clicks on 3rd div add an image in the backgroud.
// When the user clicks on 4th div change the size of div.




let box1Ele=document.getElementById("box1");
box1Ele.addEventListener("click", function() {
    this.style.backgroundColor = "blue";
});



let box2Ele=document.getElementById("box2");
box2Ele.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "green";
});


let box3Ele=document.getElementById("box3")
box3Ele.addEventListener("click", function() {
    this.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/05/68/71/37/360_F_568713710_ASKh3LYbaagJK69wL6I1NmRsjtbcAbxH.jpg')"; // Replace 'nature.jpg' with your image path
    this.style.backgroundSize = "cover";
});



let box4Ele=document.getElementById("box4");
box4Ele.addEventListener("click", function() {
    if (this.style.width === "100px") {
        this.style.width = "150px";
        this.style.height = "150px";
    } else {
        this.style.width = "100px";
        this.style.height = "100px";
    }
});