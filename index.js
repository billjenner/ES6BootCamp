var button = document.querySelector('button');
console.log('Hello'); 
var fn1 = () => console.log(this)        // <-- this is window object

function fn() { 
  console.log(this);                     // <-- this is what called the function, element button
}

button.addEventListener('click', fn1);
