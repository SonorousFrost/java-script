let answer = parseInt(prompt("Please enter a number!"))
// user input is stored in "answer" once entered
// parseInt is a function that returns user input

for (let i = 1; i <= answer; i++) {
      console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
  } else if (i % 3 === 0) {
      console.log("Fizz");
  } else if (i % 5 === 0) {
      console.log("Buzz");
  } else {
      console.log(i);
  }
}

// above the variable "i" is declared and assigned "1" (most common programmers loop from 0 not 1 but this is specific)

// the condition is "i <= answer" which will loop the function until "i" is greater than "answer"

// the "i++" tells the loop to increment "i" by 1 every itteration until the user inputted number is reached

// the modulus operator (%) returns the remainder of a division

