// chap #1 task 1
alert("Hello & Welcome to my website!")
// task 2
alert('Error! Please enter a valid password.');
// task 3
alert("Welcome to JS Land" + "<br>" + "Happy Coding! ");
//task 4
alert("Welcome to JS Land...");
alert("Happy Coding!")
// task 5 
alert("Hello... I can run JS through my web browser's console")
// task 6
//In Html
// task 7
//In Html

// chap #2 
//task 8
var username;
// task 9
var myname = "Muhammad Sami";
// task 10 (a,b,c)
var message;
message = "Hello World";
alert(message);
// task 11 
alert("Jhone Doe")
alert("15 years old")
alert("Certified Mobile Application Development")
// task 12

var pizza= 'pizza';
alert(`${pizza} /n${pizza.slice(0,pizza.length-1)} /n${pizza.slice(0,pizza.length-2)} /n${pizza.slice(0,pizza.length-3)} /n${pizza.slice(0,pizza.length-4)} `)

// task 13
var email = "example@gmail.com";
alert("My email is  " + email);  
// task 14
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book" + book );
// task 15
document.write("Yah! I can write HTML content tgrough JavaScript");
// task 16
var a= "“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”"
alert(a);



// chap#3 
//task 17
var age = 21
alert(`i am ${age} year old`);

// task 18
var visit = 14;
alert(`You have Visited ${visit} times`);


// task 19
var birthYear = 1998
document.write("My birth Year is " + birthYear+ "/nData type of my declared variable is number");

//task 20
var visitor_name = "John Doe";
var product_title = "T shirts";
var quantiy = 5;
var clothing_store= "International Shoppng Mall";
document.write(visitor_name + " orders " + quantiy + product_title + "on " + clothing_store); 


// chap#4 
//task 21
var value,total,cost;

//task 22
//Legal Variables
var $_; 
var karachi_pakistan;
var _city;
var carName;
var x;
// Illegal Variables
// var _ $;
// var app le;
// var "ali";
// var 1;
// var break;
 
// task 23 (a) , (b) ,(c) ,(d),(e)
const div = document.querySelector('div');
div.innerHTML +=  '<h4>Rules for naming JS variables</h4>'
div.innerHTML += "A variable name can't contain any spaces. </br> A variable name can contain only letters, numbers, dollar signs, and underscores. </br> It can contains keywords.It can contain keywords. </br> WE can use capital letters but variables are case sensitive. </br> Varibles can also use camelCase naming conventions.";
div.innerHTML += " </br>Variables names can only conatins letters, numbers dollar_sign($) and underscore(_)"
div.innerHTML += " </br>Variables must begin with a dollar_sign($), underscore(_) or letters."
div.innerHTML += " </br>Variables names are case sensitive";
div.innerHTML += " </br>Variable names should not be JS Keywords"



// chap 5 
//task 24

var a= 3;
var b = 5;
var c = a + b;
alert("Sum of " + a + "and" + b + " is" + c);

// task 25
var a= 3;
var b = 5;
var c = a - b;
alert("subtraction of " + a + "and" + b + "is" + c);

var a= 3;
var b = 5;
var c = a * b;
alert("Multiplication of " + a + "and" + b + "is" + c);

var a= 3;
var b = 5;
var c = a / b;
alert("Division of " + a + "and" + b + "is" + c);

var a= 3;
var b = 5;
var c = a % b;
alert("Modulus of " + a + "and" + b + "is" + c);

// task 26
//(a)
var val;
//(b)
val = 10;
div.innerHTML += `<p>Value is  ${val}</p>`;
//(c)
val = 5;
//(d)
document.write(" value is "+ val);
div.innerHTML += `<p>Initial Value is  ${val}</p>`;
//(e)
val++;
//(f)
div.innerHTML += `<p>Value after Increment is  ${val}</p>`;
document.write("Value after Increment is " + val);
//(g)
val = val + 7;
//(h)
div.innerHTML += `<p>Value after addition is  ${val}</p>`;
//(i)
val--;
//(j)
div.innerHTML += `<p>Value after decrement is  ${val}</p>`;
//(k)
alert( "The remainder is " + val % 3);

// task 27
var ticket_price = 600;
var price_of_5_tickts = ticket_price * 5;
div.innerHTML += `<p>Total cost of buy 5 tickets to a movie is ${price_of_5_tickts} </p>`;

// task 28

for(var i = 1; i <= 10; i++){
    div.innerHTML += `<p>4 * ${i} = ${i * 4} </br> </p>`
}
// task 29
var fahr = 70,celc= 25;
var fah_formula= (celc* 9/5)+32;
var celcius_formula = (fahr - 32) * 5/9;


div.innerHTML += `<p>${celc}C is ${fah_formula} </p>`;
div.innerHTML += `<p>${fahr}F is ${celcius_formula} </p>`;


// tsk 30
var first_item_price = 650;
var ordered_Of_First_Item = 3;
var Scnd_item_price = 100 ;
var ordered_Of_Scnd_Item = 7;
var Shipping_Charges = 100;
var total_cahrge= 2750;
div.innerHTML += `<h1> SHOPPING CART </h1>`;
div.innerHTML += `<p> Price of item 1 is  ${first_item_price}</p>`;
div.innerHTML += `<p> Quantity of item 1 is ${ordered_Of_First_Item} </p>`;
div.innerHTML += `<p> Price of item 2 is ${Scnd_item_price} </p>`;
div.innerHTML += `<p> Quantity of item 2 is ${ordered_Of_Scnd_Item} </p>`;
div.innerHTML += `<p> Shipping Charges is  ${Shipping_Charges} </p>`;
div.innerHTML += `<p> Total cost of your order is  ${total_cahrge} </p>`;

// task 31

var total_marks = 980;
var marks_obtained = 804;
var percentage = (marks_obtained/total_marks) * 100;
div.innerHTML += `<h1> SHOPPING CART </h1>`;
div.innerHTML += `<p>Total Marks  ${total_marks}</p> `;
div.innerHTML += `<p>Obtained marks ${marks_obtained}</p>`;
div.innerHTML += `<p> Percenyage is ${percentage}</p>`;

// task 32
var total_PK_Ruppee = ( (10*104.80) + (25 * 28) );
div.innerHTML += `<p> Percenyage is ${total_PK_Ruppee}</p>`;

// task 33
var num = 10;
//(a) (b) (c)
num = ((num + 5) * 10) / 2;

// tsk 34
var current_year= 2020;
var birth_year = 1998;
div.innerHTML += `<h1>Age calculator</h1>`;
div.innerHTML += `<p>Your Age is ${current_year - birth_year}</p>`;

// task 35
//(a)
var radius = 4;
//(b)
var circumference = 2 * radius * 3.142;
//(c)
var Area = 3.142 * radius * radius;
div.innerHTML += `<h1>The Geometrizer</h1>`;
div.innerHTML += `<p>Radius Of a Circle ${radius}</p>`;
div.innerHTML += `<p>The circumference is  ${circumference}</p>`;
div.innerHTML += `<p>The Area is ${Area}</p>`;

// task 36
var fav_snack= "CANDY";
var cur_age= 21;
var max_age= 65;
var per_day = 3;
var total_req= (max_age-cur_age)*per_day;
div.innerHTML += `<p> You will need ${total_req} to last you until the ripe old age of ${max_age} </p> `


// cahp 6-9 
//task 37

var fir= 10;
div.innerHTML += `<p> the Value of a is: ${fir} </p> `
fir = ++fir;
div.innerHTML += `<p> the Value of ++a is: ${fir} </p> `
div.innerHTML += `<p> Now the Value of a is: ${fir} </p> `

div.innerHTML += `<p> Now the Value of a++ is: ${fir++} </p> `
fir = fir++;
div.innerHTML += `<p> Now the Value of a is: ${fir} </p> `

div.innerHTML += `<p> Now the Value of a++ is: ${--fir} </p> `
fir = --fir;
div.innerHTML += `<p> Now the Value of a is: ${fir} </p> `

div.innerHTML += `<p> Now the Value of a++ is: ${fir--} </p> `
fir = fir--;
div.innerHTML += `<p> Now the Value of a is: ${fir} </p> `


// task 38
var one=2,two= 1,result;
result = --a - --b + ++b + b--;
div.innerHTML += `<p>a is ${one}</p> `
div.innerHTML += `<p>b is ${two}</p> `
div.innerHTML += `<p>result is ${result}</p> `

// task 39
var greet= prompt("Enter your name? " , "Welcome");

//task 40,41
var numb = prompt("Enter a num", 5);
for(var i = 1; i <= 10; i++){
    div.innerHTML += `<p> ${numb} * ${i} = ${numb*i}</p> `
}

// task 42
//(a)
var sub1 = prompt("Enter 1st_Subject name");
var sub2 = prompt("Enter 2nd_Subject name");
var sub3 = prompt("Enter 3rd_Subject name");
//(b)
var total_marks_sub1 = 100; 
var total_marks_sub2 = 100;
var total_marks_sub3 = 100;
//(c)
var sub1_obt_marks = prompt("Enter marks Obtain");
//(d)
var sub2_obt_marks = prompt("Enter marks Obtain");
var sub3_obt_marks = prompt("Enter marks Obtain");
//(e)
var sub1_obt_marks = prompt("Enter marks Obtain");
var tot = sub1_obt_marks +sub2_obt_marks+sub3_obt_marks;
var pert= tot/300*100;
div.innerHTML += `<table style="width:100%">
<tr>
  <th>Subject</th>
  <th>Total Marks</th>
  <th>Obtain Marks</th>
  <th>percentage </th>
</tr>
<tr>
  <td>English</td>
  <td>${total_marks_sub1}</td>
  <td>${sub1_obt_marks}</td>
  <td>${sub1_obt_marks/total_marks_sub1*100}</td>
</tr>
<tr>
  <td>Math</td>
  <td>${total_marks_sub2}</td>
  <td>${sub2_obt_marks}</td>
  <td>${sub2_obt_marks/total_marks_sub2*100}</td>
</tr>
<tr>
  <td>Math</td>
  <td>${total_marks_sub3}</td>
  <td>${sub3_obt_marks}</td>
  <td>${sub3_obt_marks/total_marks_sub3*100}</td>
</tr>
<tr>
  <td>Total</td>
  <td>${total_marks_sub1+total_marks_sub2+total_marks_sub3}</td>
  <td>${sub2_obt_marks+sub1_obt_marks+sub3_obt_marks}</td>
  <td>${pert}</td>
</tr>
</table>`


// cahp 9-11 
//task 43
var city = prompt("Enter your city name?");
 if (city === "Karachi") {
    alert("Welcome to the city of Light! ");
 }

 //task 44
 var gender = prompt("ENter Your gender");
 if (gender == "male")
    {
        alert("Goodmorning Sir!")
    }
else if (gender == "female") {
    alert("Goodmorning Ma'am");
}
else{
    alert("Incorrect Gender");
}

// task 45

var col = prompt("ENter color");
if (col == "Red")
   {
       alert("Must Stop!")
   }
else if (col == "Yellow") {
   alert("Ready To Move");
}
else{
   alert("Move Now");
}






// task 46
var user_input = prompt("Enter remaining fuel in car");
if(user_input <= 2.25){
    alert("Please refill the fuel in your car");
}

// task 47
//(a)
alert("Displayed")
//(b)
alert("Not Displayed ")
//(c)
alert("Condition 4 is true display");
//(d)
alert("Displayed");
//(e)
alert("True Displayed");
//(f)
alert("Displayed");

//task 48
var sub1 = prompt("Enter 1st_Subject marks");
var sub2 = prompt("Enter 2nd_Subject marks");
var sub3 = prompt("Enter 3rd_Subject marks");
var total_marks = 300;
document.write("Total Marks"+total_marks);
var obtain_total = sub1 +sub2 +sub3;
document.write("Marks Obtained" + obtain_total);
var Percentage = (obtain_total/total_marks) * 100;
document.write("Percentage" + Percentage);
if (Percentage >= 80){
   
    alert("A-one", "Excellent");  
}
else if(Percentage >= 70){
   
    alert("A", "Good");  
}
else if(Percentage >= 60){
   
    alert("B", "You need to improve");  
}
else if(Percentage < 60){
   
    alert("Fail" , "Sorry");  
}
else{
    alert("Invalid key");
}

//task 49
var sec_num = 6;
var input = prompt("Enter any num");
if(input == sec_num){
    alert("Bingo! Correct answer")
}
else if(input == sec_num+1){
    alert("Close enough to the correct answer")
}
else{
    alert("Incorrect number")
}

// task 50
var divisible_num = prompt("Enter a num");
if(divisible_num / 3){
    alert("It is divisible by 3");
}
// task 51
var any_num = prompt("Enter any number");
if(any_num % 2 == 0){
    alert("Even Number")
}
else{
    alert("Odd Number")
}

// task 52
var temp = prompt("Enter tempearature");
if (temp > 40){
    alert("It's too hot");
}
else if (temp > 30){
    alert("The Weather today is Normal");
}
else if (temp > 20){
    alert("Today's weather is cool");
}
else if (temp > 10){
    alert(" OMG! Today's weather is soo cool");
}
else{
    alert("Incorrect temperature")
}

//task 53
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
var oper = prompt("Enter addition operator");
if(oper == '+')
{
    alert("sum "+(num1+num2));
}
else if (oper == "-" ){
    alert("diff "+(num1-num2));
}
else if (oper == "*" ){
    alert("product "+(num1*num2));
}
else if (oper == "/" ){
    alert("div "+(num1/num2));
}
else if (oper == "%" ){
    alert("Mod "+(num1%num2));
}
else{
    alert('Invalid')
}


// chap 12-13 
//task 54
var cha = prompt("Enter a char");
function isLower(character) {
    return (character === character.toLowerCase()) && (character !== character.toUpperCase());
  }
 alert(isLower(cha));



// task 55
var int1 = prompt("Enter a num");
var int2 = prompt("Enter a num");
if (int1 > int2){
    alert("Number 1 is larger");
}
else if(int1 == int2){
    alert("Numbers are equals");
}
else{
    alert("Numbers are niether equal nor greater")
}

// task 56
var numbs = prompt("Enter a number");
if (numbs == "+"){
    alert("Number is positive")
}
else if (numbs == "-"){
    alert("Number is negative")
}
else{
    alert("Number is zero")
}

// task 57

var char = prompt("Enter any character of length 1", "j");
if(char == "a"){
    alert("This is a vowel")
}
else if(char == "e"){
    alert("This is a vowel")
}
else if(char == "i"){
    alert("This is a vowel")
}
else if(char == "o"){
    alert("This is a vowel")
}
else if(char == "u"){
    alert("This is a vowel")
}
else{
    alert("It's not a vowel")
}

// task 58
 var password = 12346578;
 var user_paswrd = prompt("Enter your password");
 if (user_paswrd == password){
     alert("Correct! The password you entered matches the original password");
 }
 else {
    alert("Incorrect Password");
 }

 // task 59

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

// task 60


var tim = prompt("Enter time in 24 Hour Format");
if(tim >= 0 && tim < 12 ){
    alert("Good Morning")
}
else if(tim >= 12 && tim < 17){
    alert("Good Afternoon")
}
else if(tim >= 17 && tim < 21){
    alert("Good Evening")
}
else if(tim >= 21 && tim <= 24){
    alert("Good Night")
}

//chap 14-16


// task 61
var students_names = [" " , " " , " "];
// task 62
var std_name = {
    " " : "" ,
    " " : " " ,
    " " : " " ,
}
// task 63
var arr_str = ["apple" , "mango", "fruits"];

// task 64
var num_arr = [3,5,56,7,4];

// task 65
var bool_arr = ["True" , "False"];

// task 66
var mixed_arr = ["name", 3,"True",123];

// task 67
var qualification = [ "SSC" , "HSC" , "BCS", "BS" , "BCOM" , "MS" , "M. Phil", "PhD"];
document.write("Qualification");
document.write("1)" + qualification[0]);
document.write("2)" + qualification[1]);
document.write("3)" + qualification[2]);
document.write("4)" + qualification[3]);
document.write("5)" + qualification[4]);
document.write("6)" + qualification[5]);
document.write("7)" + qualification[6]);
document.write("8)" + qualification[7]);

// task 68
var students_names = ["Sami" , "Hashim" , "manzar"];
var score_arr = [320,230,480];
var total = 500;
var Percentage = (score_arr/total) * 100;
document.write("Score of " + students_names[0] + "is " + score_arr[0] + "." + "Percentage is " + Percentage + "%");
document.write("Score of " + students_names[1] + "is " + score_arr[1] + "." + "Percentage is " + Percentage + "%");
document.write("Score of " + students_names[2] + "is " + score_arr[2] + "." + "Percentage is " + Percentage + "%");

// task 69
var color_arr = ["Red", "Green", "Yellow", "Blue", "Orange", "Purple"];
document.write(color_arr);
//(a)
var colr_inp = prompt("What color u want?");
var arr = [];
if (colr_inp == color_arr){
    alert(arr[0][color_arr[0]])
}



// task 70
var scores = [40, 100, 48, 50, 36, 88];
var assc = scores.sort(function(a, b){return a-b});
document.write("Score of Students" + scores);
document.write("Ordered Scores Of Students" + ass);

// task 71
cities = ["karachi","Lahore", "Islamabad", "Quetta","Peshawar"];
copy_cities = [cities[2] , cities[3]];
document.write("CIties List " + cities);
document.write("Selected citites list:" + copy_cities);

// task 72
var array = ["This", "is" , "my", "cat"];
var join_arr = join_arr.join(array);
document.write("Array " + array);
document.write("String "+ join_arr);

// task 73
var array1 = ["This", "is" , "my", "cat"];
document.write("String: "+ array1.join(' '));


// task 74
arr1 = ["Keyboard","Mouse","Printer","Monitor"]




// task 75
let  arr2 = ["Keyboard","Mouse","Printer","Monitor"];
rev_arr = rev_arr.reverse(arr2);
document.write("Devices" + arr2);
document.write("Reverse Array " + rev_arr);

// task 76
let  arr3 = ["0333333333","0333333","033333333","03333333"];
document.write(arr3.join('</br>'));


// chap 17-20 
//task 77
let  arr4 = ["0333333333",["0333333","033111111"],"033333333","03333333"];

// task 78
let  arr5 =[[1,2,3],[4,5,6],[7,8,9]]

// task 79

let arr6= [1,2,3,4,5,6,7,8,9,10];
arr6.forEach(x=> div.innerHTML += `<p> ${x}</p>`)



// task 80
var numb = prompt("Enter a table num");
var len = prompt("Enter length")
for(var i = 1; i <= len; i++){
    div.innerHTML += `<p> ${numb} * ${i} = ${numb*i}</p>`
}

// task 81

var fruits = ["apple", "banana", "mango", "orange","strawberry"]
div.innerHTML += `<p> ${fruits.join(',')}</p>` 

for(i = 0; i < 5; i++){
    div.innerHTML += `<p> Element At index ${i} is ${ fruits[i] }</p>` 
}



// task 82

var arr7= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
div.innerHTML += `<p> ${arr7.join(',')}</p>` 
arr7 = arr7.reverse();
div.innerHTML += `<p> ${arr7.join(',')}</p>` 

var arr8= [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
div.innerHTML += `<p> ${arr8.join(',')}</p>` 

var arr9= [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
div.innerHTML += `<p> ${arr9.join(',')}</p>` 

var arr10= [2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000];
div.innerHTML += `<p> ${arr10.join(',')}</p>` 

// task 83
A = ["cake", "apple pie", "cookie", "chips", "patties"]
var inp = prompt("What do you want to order? ");
if(inp == A){
    alert(inp + "is available at" + inp[A])
}






// task 84
arr3 = [24, 53, 78, 91, 12];
max_arr = arr3.max();
div.innerHTML += `<p> ${arr3.join(',')}</p>` 
div.innerHTML += `<p> ${max_arr}</p>` 

// task 85
arr4 = [24, 53, 78, 91, 12];
min_arr = arr3.min();
div.innerHTML += `<p> ${arr4.join(',')}</p>` 
div.innerHTML += `<p> ${min_arr}</p>` 

// task 86

for (var i = 1; i <= 100; i++) {
    if(i%5 == 0){
        div.innerHTML += `<p> ${i}</p>` 
    }

}















