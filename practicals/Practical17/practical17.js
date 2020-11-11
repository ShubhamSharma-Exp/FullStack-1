// Selectors

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");

// Event Handlers

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

// Functions

function showTime() {
  let today = new Date();

  let hour, min, sec;

  hour = today.getHours();
  min = today.getMinutes();
  sec = today.getSeconds();

  // Setting AM and PM
  const ampm = hour > 12 ? "PM" : "AM";

  // Coverting to 12 hrs format
  hour = hour % 12 || 12;

  // Output time

  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)} ${ampm}`;

  date.innerHTML = today.toDateString();
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Greeting
function setGreeting() {
  let today = new Date();
  let hour = today.getHours();
  if (hour < 12) {
    document.body.style.backgroundImage =
      'url("../../images/Practical17_images/morning.jpg")';
    greeting.innerHTML = "Good Morning";
    date.style.color = "#C7DA04";
    name.style.color = "#C7DA04";
    greeting.style.color = "#C7DA04";
    time.style.color = "#C7DA04";
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      'url("../../images/Practical17_images/afternoon.jpg")';
    greeting.innerHTML = "Good Afternoon";
    date.style.color = "#F4470B ";
    name.style.color = "#F4470B ";
    greeting.style.color = "#F4470B ";
    time.style.color = "#F4470B ";
  } else {
    document.body.style.backgroundImage =
      'url("../../images/Practical17_images/night.jpg")';
    greeting.innerHTML = "Good Evening";
    date.style.color = "#0BB1F4";
    name.style.color = "#0BB1F4";
    greeting.style.color = "#0BB1F4";
    time.style.color = "#0BB1F4";
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.innerHTML = "[Enter Name]";
  } else {
    name.innerHTML = localStorage.getItem("name");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.keyCode == 13) {
      // Enter key Press
      localStorage.setItem("name", e.target.innerHTML);
      name.blur();
    }
  } else {
    // Blur Event
    localStorage.setItem("name", e.target.innerHTML);
  }
}

// Function's Call

showTime();
setGreeting();
getName();
