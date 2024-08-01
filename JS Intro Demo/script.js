//Console.log allows you to display things in the console
console.log("Hello world");


//----------------------------------------------------------------------------------------------------------------------------------------------------------


//This prompts a user to enter there name in the browser
let user_name = prompt("Enter your name");

// Prints out the name that we got from the prompt
console.log(user_name);


//----------------------------------------------------------------------------------------------------------------------------------------------------------


//This is accessing the html element with the id demo. Using getElementById is recommended
let byid = document.getElementById("byid");

//This adds "hey im good" to the html element that has the id "byid"
byid.innerHTML = "By id";


//----------------------------------------------------------------------------------------------------------------------------------------------------------


// This gets all elements with the class 'byclass'
let byclass = document.getElementsByClassName('byclass');

// Iterate through the HTMLCollection(getElementsByClassName returns a HTMLCollection). Below is called a for loop. This will do it for all elements with that class
for (var i = 0; i < byclass.length; i++) {
    byclass[i].innerHTML = "By class. Im add it to every hmtl element that has the class byclass";
}

//Or you could pick which index to do. This will only do it for one
// byclass[0].innerHTML = "Test"

//querySelector get the first element that matches. In this case it gets the first element with the class byclass
let byquery = document.querySelector('.byquery');
byquery.innerHTML = "By query selector";

