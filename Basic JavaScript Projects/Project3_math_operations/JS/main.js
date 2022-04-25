function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("math0").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("math1").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 6 * 8;
    document.getElementById("math2").innerHTML = "6 x 8 = " + multiplication;
}

function division_Function() {
    var division = 48 / 6;
    document.getElementById("math3").innerHTML = "48 / 6 = " + division;
}

function more_math() {
    var simple_math = (1 + 2) * 10/ 2 - 5;
    document.getElementById("math4").innerHTML = "1 plus 2, multiplied by 10, divided in half and the subtracted by 5 equals = " + simple_math;
}

function modulus_Operator() {
    var simple_math1 = 25 % 6;
    document.getElementById("math5").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math1;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("math6").innerHTML = -x;
}

var Y = 5;
Y++;
document.write(Y);

var Z = 5.25;
Z--;
document.write(Z);

window.alert(Math.random()); // get a random number between 0 and 1
window.alert(Math.random() * 100); // get random number between 0 and 100

window.alert(Math.E); // return Euler's number
window.alert(Math.PI); // returns Pi 
