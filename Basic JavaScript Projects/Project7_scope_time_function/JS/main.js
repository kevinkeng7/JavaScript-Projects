//var X = 10;
//function Add_numbers_1() {
//    document.write(20 + X + "<br>");
//}

function Age_Function() {
    var Age, Vote;
    Age = document.getElementById("Age").value;
    if (Age >= 18) { 
        Vote = "You are old enough to vote!"; //if age is >= 18, print
    }
    else {
        Vote = "You are not old enough to vote!"; //if age is < 18, print
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"; // print its morning time
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon."; // print its afternoon
    }
    else {
        Reply = "It is evening time."; // print its evening time
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

