function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Count10").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[3] + ".";
}

function array_Function () {
    var Dog_Pic = [];
    Dog_Pic[0] = "sleep";
    Dog_Pic[1] = "play";
    Dog_Pic[2] = "eat";
    Dog_Pic[3] = "bark";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " + 
        Dog_Pic[1] + "ing."
}

function constant_Function () {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color ="blue";
    Musical_Instrument.price ="$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price; 
    document.getElementById("Color").innerHTML = "The color of the " +
        Musical_Instrument.type + " is " + Musical_Instrument.color;
}

var A = 30;
document.write(A);

theFunction();

function myFunction() {
    var B = 10;
    document.getElementById("Example_1").innerHTML = B;

    if (B > 5) {
        let C = 20;
        const D = 30;
        document.getElementById("Example_2").innerHTML = C + D;
    }
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();

