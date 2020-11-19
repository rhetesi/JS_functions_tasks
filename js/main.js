//1. (Three) Buttons eventListener with for loop function


/*
// with function definition
function handleClick() {
    let buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        // console.log(buttons.length);
        buttons[i].addEventListener('click', function () {
            console.log(buttons[i].value);
        })
    }
}
*/


/*
// with function epression
const handleClick = function() {
  let buttons = document.querySelectorAll('.button');
  for (let i = 0; i < buttons.length; i++) {
    // console.log(buttons.length);
    buttons[i].addEventListener('click', function() {
      console.log(buttons[i].value);
    })
  }
}
*/


/*
// arrow function, a window lesz a this, azaz az arrow function a parenthez kötődik
const handleClick = () => { 
  let buttons = document.querySelectorAll('.button');
  for (let i = 0; i < buttons.length; i++) {
    // console.log(buttons.length);
    buttons[i].addEventListener('click', function() {
      console.log(buttons[i].value);
    })
  }
}
*/


// Arrow function a függvényen belül
const handleClick = function () {
    let buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            //console.log(buttons[i].value);
            console.log(buttons[i].innerHTML);
        })
    }
}

handleClick();



// 2. Summation & Subtraction functions

const summation = (a = 0, b = 0) => a + b;
console.log(summation(10, 20));
console.log(summation(40));

const subtraction = (a = 0, b = 0) => a - b;
console.log(subtraction(10, 5));
console.log(subtraction(15));



// 3. personDataLog arrow function
/*
//function declaration
function personDataLog(obj) {
    console.log(`My name is ` + obj.firstname + ` ` + obj.lastname + `. I'm ` + obj.age + ` years old.`);
}
*/

/*
// function expression
const personDataLog = function ({ firstname = 'John', lastname = 'Doe', age = 33 } = {}) {
    console.log(`My name is ` + firstname + ` ` + lastname + `. I'm ` + age + ` years old.`);
}
*/

// arrow function
const personDataLog = ({firstname: 'John', lastname: 'Doe', age: '33'} = {}) => {
    console.log(`My name is ` + obj.firstname + obj.lastname + `. I'm ` + obj.age + ` years old.`);


const personData = { firstname: 'Roland', lastname: 'Hetesi', age: 46 };
personDataLog(personData);

const personData2 = { firstname: 'Jane' };
personDataLog(personData2);

personDataLog({});