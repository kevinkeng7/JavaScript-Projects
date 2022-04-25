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

document.write(10 > 2);
document.write(10 < 2);

console.log(12 + 12);

document.write("10" + 5);

console.log(10 < 2);

document.write(10==10);

document.write(3==11);


A = 10;
B = 10;
document.write(A === B);

C = 10;
D = "five";
document.write(C === D);

E = 10;
F = "ten";
document.write(E === F);

G = 10;
H = 9;
document.write (G === H);

document.write(5 > 2 && 10 > 4);
document.write(5 > 10 && 10 > 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10 > 20);

function not_Function0() {
    document.getElementById("Not0").innerHTML = !(20 > 10);
}

function not_Function1() {
    document.getElementById("Not1").innerHTML = !(5 > 10);
}


