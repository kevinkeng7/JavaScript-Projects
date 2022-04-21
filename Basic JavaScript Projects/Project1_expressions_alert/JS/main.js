alert("Hello, World -alert alert");  //alert box

window.alert("hello, world! -window alert"); //window alert

document.write("hello, world!"); //document write method

document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\""); 

document.write("\"Be who you are and say what you feel," + "because those who matter mind.\"" + "Dr. Suess"); 

var A = "This is a " + "Contatenated String " //This is contatenating a string
document.write(A) 

function My_First_Function() {   //Defining a function
    var str = "This text is green!"; //Defining a variable and giving it a string value
    var result = str.fontcolor("green"); //Using the fontcolor method on the string variable
    document.getElementById("Green_Text").innerHTML = result; //Putting the value of result int HTML element with "Green_Text" id
}


var Family = "The Millers", Dad = "Dave" , Mom = "Mel" , Daughter = "Dora" , Son = "Sunny";
var Family = Family.fontcolor("black");
var Dad = Dad.fontcolor("green");
var Mom = Mom.fontcolor("red");
var Daughter = Daughter.fontcolor("pink");
var Son = Son.fontcolor("cyan");
document.write(Son);

document.write(3+3);



// var blues = "I have the blues.";
//var blues = blues.fontcolor("blue");
//document.write(blues); 
