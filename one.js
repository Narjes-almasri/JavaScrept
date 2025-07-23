

//console.log ==> allows u to see things on the console

// console.log("hello world this is my first class in js ");// to print things we have consol.log



/*   Data Types in JS: 
1. undefined ==> is something that hasnt been defined, we may have a variable that havent been set to be anything yet 
2. null ==> means nothing
3. boolean ==> means True or False
4. string ==> usual strings 
5. symbol ==>is immutable primitive value that is unique 
6. number ==> is a number 
7. object ==> can store a lot of different key value pairs
*/


/*
 To declare a variable we can use var 

1) var my = it can be anything of the  data types above but it common to set smth to string 

 ex)
 var myN = "hello"
 myN = 5; we can reset it into another datatype we want 

 the secound way is to use (let)
2) let n ="hello"
n= 9;

the third  way by using const
3) const pi = 3.14 
if we try to do pi =9 this will be an error cuz its datatype CONST which will  never change 


the difference between var const and let is:

var : is doing to be able to be used throughout the whole program 
let : will only be used ithin the scope of where u declared  it 
const : is a variable that should never be change -it can never change-
*/
  /* variable && function names are case sensitive!  */
var s;
console.log(s); //this will be null / (undefined  ==> because we didnt set it to anything) 
var num=5; // declaring variables can be done by using (var) var can take any datatype
var str="narjoosa";
var ch='a';
// console.log("the num= ",num);
// console.log("str= ",str);
// console.log("ch= ",ch);
s=0;
num = ch;
s='k';
console.log(s); //it will take the last assigning of the variable
console.log(num);

//////////////


/* Addition in js  */

let a=20+1;
console.log(a);

/* Subtration in js  */

let sub = 50 - 49;
console.log(sub);

/* Multiplication in js  */

let m = 3 * 7;
console.log(m);

/* Division in js  */

let d = 2 / 8;
console.log(d);

/* Incremeinting in js Incremeinting ==> to increment a number means adding one to it  */ 

let j=5;
/* j += 1; // inested of doing this we can do j++; */
j++;
console.log(j);

/* Decrementing in js Incremeinting ==> to decrement a number means subtracting one of it  */ 
let q=11;
q--;
console.log(q);

/////////////////////////////

/* Decimal numbers in js  */

//these are sometimes  reffering to floating point numbers

 var f=5.9;//anything has a decimal point on it its a decimal number 3.9 
 f++;
 console.log(f);



/* Multiply decimal num in js  *///is the same as  Multiplying integers
var f=5.001 * 5;//it out = 25.005000000000003
console.log(f);
f=2.5 * 2.0;//it out =5
console.log(f);
var f=5.00 * 6;//it out = 30
console.log(f);

/* Divide decimal num in js  */

var div = 2.2 / 8.4;
console.log(d);//out = 0.25
//////////////////////////////
/* Reminder in js  */

var t= 11 % 3;
console.log(t);//2


///////////////////
/* compound assigment with agumented addition  */
let o=20;
o+=9; // inested of doing o = o+9; 
console.log(o);


/* compound assigment with agumented Subtration  */

let ll=20;
ll-=9; // inested of doing ll = ll-9; 
console.log(ll); 

/* SAME PROCESS FOR ==> compound assigment with agumented multiplication and division  p*=9;  p/=9; */


////////////////////////////////////////////////////////////

//declare String variables 

var first="narjes";
var last =" almasri";
console.log(first + last);

/* Escaping Literal Quotes  : Putting douple Quotes inside  douple Quotes  can be done by putting \ before the " */
var first="\"this is\" narjes \"al 3asal\"";

console.log(first );// "this is" narjes "al 3asal" //it will print the outside ""




/* Quoting Strings with Single Quotes */

var cc = 'hello';//hello
cc=' this is \'insane\''// this is 'insane' // it wont print the outside ''
console.log(cc);

var i='\"this is\" narjes \"al 3asal\"';//"this is" narjes "al 3asal" 
console.log(i );

var i='"this is" narjes "al 3asal"';//we can remove the \ backspace ///"this is" narjes "al 3asal"
console.log(i);

var i="heyy 'im here' ";//heyy 'im here' 
console.log(i);

var i=`'heyy "im here" '`;//'heyy "im here" ' (to print the ' and " ) we used `
console.log(i);

/* Escape Sequences in strings */

/* CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed */

var soso="hello there\n This is narjes\t the smartest \fgirl out there \nas we \"all \r know"
console.log(soso);

///////////////////////

/* concatinating with  + operator */

var l="this is ";

console.log(l+ "narjes");//==> the output will be "this is narjes"


/*  concatinating with Plus Equals Operator */


l+="wooow";//this is wooow
console.log(l);

/* Constructing Strings with Variables */

var ss = "je mapple";

var w = ss + " narjes" + " almasri";
console.log(w);//je mapple narjes almasri

/* Appending Variables to Strings */

var first="hello ";
var sec = "welcome";
console.log(first.length);
first += sec;
console.log(first);

/* Length of a String  to find it we use .length fun*/

//of we can store it then print it 
var len=sec.length;
console.log(len);
console.log(first.length);//13


/* Bracket Notation to find first character in a string      The Bracket Notation is like this [0]  */

//when we put first[0] it will give us the first letter stored in that index in first string
var kk=first[0];
console.log(kk);//h (the first letter of first which has "hello" as string)

/* Understand String Immutability */

/* Strings Are Immutable in JavaScript
✨ What it means:
Once you create a string, you can't change its individual characters — you can only replace the whole string. BUT with arrays u can
 */
first[0]="k";//if we do this it will do nothing
first = "hello";//if we do this the whole string became gg
console.log(first);




/* Find the Nth Character */
// to find the 2nd element in the string we can use the bracket notation

var secelement=first[1];
console.log(secelement);

/* Bracket Notation to find last character in a string   */

var last_elemet=first[first.length-1];
console.log(last_elemet);//e 
//also we can use this fun slice(-1); to get the last element in the string hey gpt explain this fun and how it works so when i return to this and read it wont forget it
var z=first.slice(-1);
console.log(z);


/* Bracket Notation to find nth to last character in a string   */

//we can bring the 3rd or 4th letter in order to do that we subtract how much we want fron the length of the string 

var third=first[first.length-3];
console.log(third);//l the thrid letter in first="hello"


/* Word Blanks */

function wordBlank(first_name,middle_name,last_name)
{
  var res="";

  res += "My name is " + first_name + middle_name + last_name;

  return res;
}
console.log(wordBlank("Narjes " ," Mohammad ", "Almasri"));


///////////////////////////////////////////////////////////////

/* Arrays */

//store multiple values in array ==> Arrays syntax ==> let myArray = [item1, item2, item3, ...]; // var arr=[];
/* 
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true];//Can store any data type: strings, numbers, booleans, even other arrays or objects

 */

var arr=["this","is","my 1", "array",6];

console.log(arr[4]);

/* nested arrays or multidimensional array */
//the fist element in the array is an array

var arr2=[["first", 1], ["secound",2]];
console.log(arr2[0])//[ 'first', 1 ]

/* Access Array Data with  index */

var last_elemet_inarr2=arr2.length -1;
console.log(arr2[last_elemet_inarr2])//[ 'secound', 2 ]
console.log(arr2[0])//[ 'first', 1 ]



/* Modify Array Data with  indexes */

arr[2]="my first";

console.log(arr);//[ 'this', 'is', 'my first', 'array', 6 ]



/*  Access Multi-Dimensional Arrays  with indexes */

var multi=[[1,2,3],["sec","arr"],['a','b','c'],[['f',1,"last"],"array",97]];

/* 
Visually :

var multi = [
  [1, 2, 3],
  ["sec", "arr"],
  ['a', 'b', 'c'],
  [ ["f", 1, "last"], "array", 97 ]
];
*/

console.log(multi[0][1]);//2
console.log(multi[1][1]);//arr
console.log(multi[3][0]);//[ 'f', 1, 'last' ]


//////////////

/* Manipulate arrays with push() */

// we can append data to the end of the array with push() function

arr.push("lasssst");
console.log(arr);//[ 'this', 'is', 'my first', 'array', 6, 'lasssst' ]

var ar=["append","ing"];
ar.push([" array to array", 1]);
console.log(ar)//[ 'append', 'ing', [ ' array to array', 1 ] ]


/* Manipulate arrays with pop() */
// we can remove element from the end of the array with pop() function
arr.pop()
console.log(arr);//[ 'this', 'is', 'my first', 'array', 6 ]
//we can store what we popped
let popped=ar.pop()
console.log(ar)//[ 'append', 'ing' ]
console.log(popped)//[ ' array to array', 1 ]


/* Manipulate arrays with shift() */
//shift function is very similar to the pop fun except it will remove the first element of the arrayinested of the final element

var y=arr.shift()
console.log(y);//this
console.log(arr);//[ 'is', 'my first', 'array', 6 ]


/* Manipulate arrays with unshift() */
//unshift function is very similar to the push fun while push adds the element in the end of the array but unshift adds it to the biginning of the array

let rr=arr.unshift("Happy");
console.log(arr);//[ 'Happy', 'is', 'my first', 'array', 6 ]
console.log(rr);//wooow it will return num of elements in the array ==> 5



/* Shopping List // we will creating an array of arrays */

var my_shopping_list=[["coffee","3$"],["green apples","2$"],["keyboard","10$"]];



/* Write Reusable with Functions */

/*
 to declare a function the syntsx is 

function nameoffun()
{
}
*/

function reuseme()
{
  console.log("ana zhegeeeettttt");
}
reuseme()


/* passing values to functions with Arguments */
//this means when our fun called we have to pass data into that function 

function subb(a,b)
{
  console.log(a-b);
}

subb(10,5)



////////////////////////////////////////////////////

/* Global Scope and functions */

// scope refers to the visability of variables
//variables which have defined outside of a function block have global scope 
// global scope means hey can be seen everywhere in our js code 


var g=5;

function myfun(a)
{
  console.log(g+a);
}
myfun(5)//10


function checking()
{
  var out="";
  if(typeof g != "undefined")
  {
    out += "my global var is =" + g;
  }
  console.log(out)
}
checking()

//we can declare a variable without using var or ler just putting its name and value
// if we declare the fun without var keyword the variable becomes global automatically that means u can access it anywhere

function funn()
{
  p=5;// No var/let/const → becomes global!

  console.log(p+7)//12
}
funn()
console.log(p) // we can print it outside the fun cuz its global
/* 

Reassignment → Changing the value
Redeclaration → Repeating the declaration

Declared With	Scope 	Reassignable?	Redeclarable?
var	function       	✅ Yes	         ✅ Yes
let	block	          ✅ Yes	         ❌ No
No keyword	global*	✅ Yes        	✅ Yes
const	block	        ❌ No           ❌ No
*/



//////////////////////////////////////
/* Local Scope */

function locall()
{
  var sp=10;//this is only visiable inside that fun
  console.log(sp);
}
locall();
// console.log(sp);//if we try to print it outside its scope we will get an error message cuz its local var