//Task-6:

// Create a form to take user data like name and email. 
// Now once the user have filled his data and clicked on submit button get all the data filled in the form and
// put inside a object and store that object in global userArray[].
// Below your form create a div which display all the user names stored in your userArray[].


 
 const userArray = [];

 
 function handleSubmit(event) {
   event.preventDefault();

//    var usernameEle=document.getElementById('username');
//    var userEmailEle=document.getElementById('useremail');
    
//     var name= usernameEle.value;
//     var email= userEmailEle.value;
    
//     user.name=name
//     user.email=email;

const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');

   const user = { name, email };

   userArray.push(user);
   displayUserNames();
 }


 function displayUserNames() {
   const userListDiv = document.getElementById('userList');
   userListDiv.innerHTML = ''; 

   userArray.forEach(user => {
     const userNameElement = document.createElement('p');
     userNameElement.textContent = user.name;
     userListDiv.appendChild(userNameElement);
   });
 }

 const form = document.getElementById('userDataForm');
 form.addEventListener('submit', handleSubmit);

 console.log(userArray);