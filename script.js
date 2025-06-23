const clock = document.querySelector('#clock');

// we have learnt how to take time : 
// let date = new Date()
// console.log(date.toLocaleTimeString());

// setInterval() is a JavaScript function that repeatedly executes a given piece of code at a fixed time interval (in milliseconds) until you tell it to stop  : setInterval(function, delay);  
// - function: The code or function you want to run repeatedly. 
// -delay: Time in milliseconds between each execution (e.g., 1000 ms = 1 second).


setInterval(() => {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString('en-US');
} , 1000)