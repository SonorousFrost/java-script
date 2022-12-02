function showMessage () {
    alert('Hello!');
}
// showMessage(); uncomment to activate

let a = 10;
let b = 7;

function add7(a, b) {
    return a + b;
}

console.log(add7(a, b));

let c = 5;
let d = 8;

function multiply(c, d){
    return c * d;
}

console.log(multiply(c, d));

let nor = "Hello!";
let cam = "goodBye";
let ohp = "HellO AgaiN";

function capitalizeFirstLetter(nor) {
    return nor.charAt(0).toUpperCase() + nor.slice(1).toLowerCase();
}         

function capitalizeFirstLetter(cam) {
    return cam.charAt(0).toUpperCase() + cam.slice(1).toLowerCase();
}

function capitalizeFirstLetter(ohp) {
    return ohp.charAt(0).toUpperCase() + ohp.slice(1).toLowerCase();
}

        // function identifies string, returns value with first letter capitalized, then cuts the string back together with the remainder set to lowerCase

console.log (capitalizeFirstLetter(nor)); // Hello!
console.log (capitalizeFirstLetter(cam)); // Goodbye
console.log (capitalizeFirstLetter(ohp)); // Helloagain