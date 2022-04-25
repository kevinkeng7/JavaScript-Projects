function My_First_Function() {   //Defining a function
    var str = "Welcome to Mcdonalds!"; //Defining a variable and giving it a string value
    var result = str.fontcolor("purple"); //Using the fontcolor method on the string variable
    document.getElementById("Purple_Text").innerHTML = result; //Putting the value of result int HTML element with "Green_Text" id
}

function myFunction() {
    var sentence = "I am learning ";
    sentence += "a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence; //contatenate 2 sentences using getElementById
}

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}