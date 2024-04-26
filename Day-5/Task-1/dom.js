// Task-1: Create 1 div with id:mainDiv, 2 Paragraph with class:para. 
// select them using id selector and class selector and change their color text color to red.


let mainDiv=document.getElementById('mainDiv');
mainDiv.style.color="red";
console.log(mainDiv);

var paraEle = document.getElementsByClassName("para");
    for (var i = 0; i < paraEle.length; i++) {
        paraEle[i].classList.add("red-text");
    }