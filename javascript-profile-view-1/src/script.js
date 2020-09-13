let username = prompt("What is your username");
let firstName = prompt("What is your first name");
let lastName = prompt("What is your last name");
let description = prompt("Enter some short description about yourself");
let region = prompt("Where are you currently");

let date = "Currently working on it";
let time = Date();

document.getElementById("joinedAt").innerHTML = `${date}`;

document.getElementById("currentTime").innerHTML = `${time}`;

document.getElementById("username").innerHTML = `${username}`;

document.getElementById("firstName").innerHTML = `${firstName}`;

document.getElementById("lastName").innerHTML = `${lastName}`;

document.getElementById("region").innerHTML = `${region}`;

document.getElementById("description").innerHTML = `${description}`;