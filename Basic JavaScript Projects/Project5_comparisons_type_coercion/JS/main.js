//document.write(typeof "word");

//document.write(typeof 3);

function my_Function0()  {
    document.getElementById("Test0").innerHTML = 0/0;

}

function my_Function1()  {
    document.getElementById("Test1").innerHTML = isNaN('This is a string');

}

function my_Function2()  {
   document.getElementById("Test2").innerHTML = isNaN('007');

}

function my_Function3()  {
    document.getElementById("Test3").innerHTML = 2E310+2E310;
}

function my_Function4()  {
    document.getElementById("Test4").innerHTML = -3E310-3E310;
}


//document.write(2E310);

//document.write(-3E310);