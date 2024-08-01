
//Get numbers. My defualt the value from prompt is a string. So we use parseInt to make it a Int.
let num1 = parseInt(prompt("Enter number 1"));
let num2 = parseInt(prompt("Enter number 2"));
let num3 = parseInt(prompt("Enter number 3"));

console.log(typeof num1);

//We are finding out which number is the largest

//Going to use this var to save the largest number. So thats why it doesnt have a value
let largest;

//We are checking if num1 is >= num2. Also if num1 >= num3. If not the code in the if wont run
if(num1 >= num2 && num1 >= num3) {
    largest = num1; //we will set the largest var to num1 since its the biggest
} 

//If the first if fails it will then go to else if
else if(num2 >= num1 && num2 >= num3) {
    largest = num2;
}

//If if the first two numbers arent the biggest then there is only one more option. Number three is biggest
else {
    largest = num3;
}

//Get the element with the largest_number
let largesthtml = document.getElementById("largest_number");

//Add the largest value to the html element with the id largest_number
largesthtml.innerHTML = "The largest number is " + largest;

//Tenery
