<!-- # JavaScript Fundamentals - Complete Notes

## Console Output

The `console.log()` function allows you to see output in the browser console. It's used for debugging and displaying information.

```javascript
console.log("hello world this is my first class in js");
// Output: hello world this is my first class in js
```

## Data Types in JavaScript

JavaScript has 7 primitive data types:

1. **undefined** - Something that hasn't been defined; a variable that hasn't been set to anything yet
2. **null** - Means nothing/empty value  
3. **boolean** - True or False values
4. **string** - Text data
5. **symbol** - Immutable primitive value that is unique
6. **number** - Numeric values (integers and decimals)
7. **object** - Can store multiple key-value pairs

```javascript
var s;
console.log(s); // undefined (because we didn't set it to anything)

var num = 5;        // number
var str = "narjoosa"; // string
var ch = 'a';       // string (character)
var isTrue = true;  // boolean
var nothing = null; // null
```

## Variable Declaration

**Important:** Variable and function names are case sensitive!

### 1. Using `var`
Can be anything of the data types above, commonly used for strings. Can be reassigned to any data type.

```javascript
var myN = "hello";
myN = 5; // Can reset it to another datatype
console.log(myN); // 5
```

### 2. Using `let`
Similar to var but with block scope.

```javascript
let n = "hello";
n = 9; // Can be reassigned
console.log(n); // 9
```

### 3. Using `const`
A variable that should never change - it cannot be reassigned.

```javascript
const pi = 3.14;
// pi = 9; // This will cause an error because const cannot be changed
console.log(pi); // 3.14
```

### Variable Scope Differences:
- **var**: Can be used throughout the whole program (function scope)
- **let**: Will only be used within the scope where you declared it (block scope)  
- **const**: Is a variable that should never change

```javascript
// Example of variable reassignment
var s;
console.log(s); // undefined

var num = 5;
var str = "narjoosa";
var ch = 'a';

s = 0;
num = ch;
s = 'k';
console.log(s);   // 'k' (takes the last assignment)
console.log(num); // 'a'
```

## Mathematical Operations

### Addition
Adding numbers together using the + operator.

```javascript
let a = 20 + 1;
console.log(a); // 21
```

### Subtraction
Subtracting numbers using the - operator.

```javascript
let sub = 50 - 49;
console.log(sub); // 1
```

### Multiplication
Multiplying numbers using the * operator.

```javascript
let m = 3 * 7;
console.log(m); // 21
```

### Division
Dividing numbers using the / operator.

```javascript
let d = 2 / 8;
console.log(d); // 0.25
```

### Incrementing
To increment a number means adding one to it. Instead of doing `j += 1` or `j = j + 1`, we can use `j++`.

```javascript
let j = 5;
j++; // Same as j += 1 or j = j + 1
console.log(j); // 6
```

### Decrementing
To decrement a number means subtracting one from it.

```javascript
let q = 11;
q--;
console.log(q); // 10
```

### Decimal Numbers (Floating Point)
These are sometimes referred to as floating point numbers. Anything with a decimal point is a decimal number.

```javascript
var f = 5.9; // Decimal number
f++;
console.log(f); // 6.9
```

### Multiply Decimal Numbers
Same as multiplying integers.

```javascript
var f = 5.001 * 5;
console.log(f); // 25.005000000000003

f = 2.5 * 2.0;
console.log(f); // 5

f = 5.00 * 6;
console.log(f); // 30
```

### Divide Decimal Numbers
Same process as regular division.

```javascript
var div = 2.2 / 8.4;
console.log(div); // 0.26190476190476195
```

### Remainder (Modulus)
The % operator gives you the remainder when dividing two numbers.

```javascript
var t = 11 % 3;
console.log(t); // 2 (remainder when 11 is divided by 3)
```

### Compound Assignment with Augmented Addition
Instead of doing `o = o + 9`, we can use `o += 9`.

```javascript
let o = 20;
o += 9; // Same as o = o + 9
console.log(o); // 29
```

### Compound Assignment with Augmented Subtraction
Instead of doing `ll = ll - 9`, we can use `ll -= 9`.

```javascript
let ll = 20;
ll -= 9; // Same as ll = ll - 9
console.log(ll); // 11
```

**Note:** Same process works for multiplication (`p *= 9`) and division (`p /= 9`).

## Strings

### Declare String Variables
Strings are declared using quotes (single or double).

```javascript
var first = "narjes";
var last = " almasri";
console.log(first + last); // "narjes almasri"
```

### Escaping Literal Quotes
Putting double quotes inside double quotes can be done by putting `\` before the `"`.

```javascript
var first = "\"this is\" narjes \"al 3asal\"";
console.log(first); // "this is" narjes "al 3asal"
```

### Quoting Strings with Single Quotes
You can use single quotes to wrap strings, and escape single quotes inside with `\'`.

```javascript
var cc = 'hello';
console.log(cc); // hello

cc = ' this is \'insane\'';
console.log(cc); // this is 'insane'

var i = '\"this is\" narjes \"al 3asal\"';
console.log(i); // "this is" narjes "al 3asal"

// We can remove the backslash when using single quotes around double quotes
var i = '"this is" narjes "al 3asal"';
console.log(i); // "this is" narjes "al 3asal"

var i = "heyy 'im here' ";
console.log(i); // heyy 'im here'

// Using template literals (backticks) to print both types of quotes
var i = `'heyy "im here" '`;
console.log(i); // 'heyy "im here" '
```

### Escape Sequences in Strings
Special characters that create formatting effects:

- `\'` - single quote
- `\"` - double quote  
- `\\` - backslash
- `\n` - newline
- `\r` - carriage return
- `\t` - tab
- `\b` - backspace
- `\f` - form feed

```javascript
var soso = "hello there\n This is narjes\t the smartest \fgirl out there \nas we \"all \r know";
console.log(soso);
/* Output:
hello there
 This is narjes	 the smartest girl out there 
as we "all 
 know
*/
```

### Concatenating with + Operator
Joining strings together using the + operator.

```javascript
var l = "this is ";
console.log(l + "narjes"); // "this is narjes"
```

### Concatenating with Plus Equals Operator
Adding to the end of an existing string.

```javascript
var l = "this is ";
l += "wooow";
console.log(l); // "this is wooow"
```

### Constructing Strings with Variables
Building strings using multiple variables.

```javascript
var ss = "je mapple";
var w = ss + " narjes" + " almasri";
console.log(w); // "je mapple narjes almasri"
```

### Appending Variables to Strings
Adding variables to existing strings.

```javascript
var first = "hello ";
var sec = "welcome";
first += sec;
console.log(first); // "hello welcome"
```

### Length of a String
To find the length of a string, we use the `.length` property.

```javascript
var first = "hello ";
var sec = "welcome";
console.log(first.length); // 6

// We can store the length in a variable
var len = sec.length;
console.log(len); // 7
console.log(first.length); // 13 (after concatenation)
```

### Bracket Notation to Find First Character
The bracket notation `[0]` gives us the first letter stored at index 0.

```javascript
var first = "hello";
var kk = first[0];
console.log(kk); // 'h' (the first letter of "hello")
```

### String Immutability
Strings are immutable in JavaScript - once you create a string, you can't change its individual characters. You can only replace the whole string. (Note: Arrays CAN be changed.)

```javascript
var first = "hello";
first[0] = "k"; // This will do nothing - strings are immutable
console.log(first); // "hello" (unchanged)

first = "kello"; // This replaces the whole string
console.log(first); // "kello"
```

### Find the Nth Character
To find the 2nd element (or any position) in the string, use bracket notation.

```javascript
var first = "hello";
var secelement = first[1];
console.log(secelement); // 'e' (second character)
```

### Bracket Notation to Find Last Character
To get the last character, use `[string.length - 1]`.

```javascript
var first = "hello";
var last_element = first[first.length - 1];
console.log(last_element); // 'o'

// Alternative: using slice(-1) method
var z = first.slice(-1);
console.log(z); // 'o'
```

**How slice(-1) works:** The `slice()` method extracts a section of a string. When you use a negative number like `-1`, it counts from the end of the string. So `slice(-1)` gets the last character, `slice(-2)` gets the last 2 characters, etc.

### Bracket Notation to Find Nth to Last Character
To get the 3rd or 4th letter from the end, subtract how much you want from the length.

```javascript
var first = "hello";
var third = first[first.length - 3];
console.log(third); // 'l' (third character from the end)
```

### Word Blanks Function Example
Creating a function that builds sentences with parameters.

```javascript
function wordBlank(first_name, middle_name, last_name) {
  var res = "";
  res += "My name is " + first_name + middle_name + last_name;
  return res;
}
console.log(wordBlank("Narjes ", " Mohammad ", "Almasri"));
// Output: "My name is Narjes  Mohammad Almasri"
```

## Arrays

### Store Multiple Values in Array
Arrays can store multiple values. Syntax: `let myArray = [item1, item2, item3, ...]`

```javascript
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true]; // Can store any data type

var arr = ["this", "is", "my 1", "array", 6];
console.log(arr[4]); // 6
```

### Nested Arrays (Multidimensional Array)
The first element in the array can be an array itself.

```javascript
var arr2 = [["first", 1], ["second", 2]];
console.log(arr2[0]); // ['first', 1]
```

### Access Array Data with Index
Using the index to access specific elements.

```javascript
var arr2 = [["first", 1], ["second", 2]];
var last_element_inarr2 = arr2.length - 1;
console.log(arr2[last_element_inarr2]); // ['second', 2]
console.log(arr2[0]); // ['first', 1]
```

### Modify Array Data with Indexes
You can change array elements by assigning new values to specific indexes.

```javascript
var arr = ["this", "is", "my 1", "array", 6];
arr[2] = "my first";
console.log(arr); // ['this', 'is', 'my first', 'array', 6]
```

### Access Multi-Dimensional Arrays with Indexes
Accessing elements in nested arrays using multiple brackets.

```javascript
var multi = [
  [1, 2, 3],
  ["sec", "arr"],
  ['a', 'b', 'c'],
  [["f", 1, "last"], "array", 97]
];

console.log(multi[0][1]); // 2
console.log(multi[1][1]); // "arr"
console.log(multi[3][0]); // ["f", 1, "last"]
```

### Manipulate Arrays with push()
We can append data to the end of the array with the `push()` function.

```javascript
var arr = ["this", "is", "my first", "array", 6];
arr.push("lasssst");
console.log(arr); // ['this', 'is', 'my first', 'array', 6, 'lasssst']

var ar = ["append", "ing"];
ar.push([" array to array", 1]);
console.log(ar); // ['append', 'ing', [' array to array', 1]]
```

### Manipulate Arrays with pop()
We can remove elements from the end of the array with the `pop()` function.

```javascript
var arr = ["this", "is", "my first", "array", 6, "lasssst"];
arr.pop();
console.log(arr); // ['this', 'is', 'my first', 'array', 6]

// We can store what we popped
var ar = ["append", "ing", [" array to array", 1]];
let popped = ar.pop();
console.log(ar); // ['append', 'ing']
console.log(popped); // [' array to array', 1]
```

### Manipulate Arrays with shift()
The `shift()` function is similar to `pop()` except it removes the first element instead of the final element.

```javascript
var arr = ["this", "is", "my first", "array", 6];
var y = arr.shift();
console.log(y); // "this"
console.log(arr); // ['is', 'my first', 'array', 6]
```

### Manipulate Arrays with unshift()
The `unshift()` function is similar to `push()` but adds elements to the beginning of the array instead of the end.

```javascript
var arr = ["is", "my first", "array", 6];
let rr = arr.unshift("Happy");
console.log(arr); // ['Happy', 'is', 'my first', 'array', 6]
console.log(rr); // 5 (returns the new length of the array)
```

### Shopping List Example
Creating an array of arrays for a shopping list.

```javascript
var my_shopping_list = [
  ["coffee", "3$"],
  ["green apples", "2$"],
  ["keyboard", "10$"]
];
```

## Functions

### Write Reusable Code with Functions
To declare a function, use this syntax:

```javascript
function nameoffun() {
  // function body
}
```

Example of a reusable function:

```javascript
function reuseme() {
  console.log("ana zhegeeeettttt");
}
reuseme(); // Call the function
// Output: ana zhegeeeettttt
```

### Passing Values to Functions with Arguments
When a function is called, we can pass data into that function using parameters.

```javascript
function subb(a, b) {
  console.log(a - b);
}
subb(10, 5); // Output: 5
```

## Variable Scope

### Global Scope and Functions
Scope refers to the visibility of variables. Variables defined outside of a function block have global scope. Global scope means they can be seen everywhere in your JavaScript code.

```javascript
var g = 5; // Global variable

function myfun(a) {
  console.log(g + a); // Can access global variable
}
myfun(5); // Output: 10

function checking() {
  var out = "";
  if (typeof g != "undefined") {
    out += "my global var is = " + g;
  }
  console.log(out);
}
checking(); // Output: "my global var is = 5"
```

### Creating Global Variables Without Keywords
If you declare a variable without using `var`, `let`, or `const`, the variable becomes global automatically.

```javascript
function funn() {
  p = 5; // No var/let/const → becomes global!
  console.log(p + 7); // 12
}
funn();
console.log(p); // 5 - can print it outside the function because it's global
```

### Local Scope
Variables declared inside a function are only visible within that function.

```javascript
function locall() {
  var sp = 10; // This is only visible inside this function
  console.log(sp); // 10
}
locall();
// console.log(sp); // This would cause an error - sp is not accessible outside its scope
```

## Variable Declaration Summary

| Keyword | Scope | Reassignable? | Redeclarable? |
|---------|-------|---------------|---------------|
| `var` | function | ✅ Yes | ✅ Yes |
| `let` | block | ✅ Yes | ❌ No |
| `const` | block | ❌ No | ❌ No |
| No keyword | global* | ✅ Yes | ✅ Yes |

**Reassignment** → Changing the value  
**Redeclaration** → Repeating the declaration

## Key Takeaways

1. **Variable Declaration**: Use `const` by default, `let` when you need to reassign, avoid `var` in modern JavaScript
2. **Scope**: Understand the difference between global, function, and block scope  
3. **String Immutability**: You cannot change individual characters of a string, only replace the entire string
4. **Array Methods**: `push/pop` work with the end, `unshift/shift` work with the beginning
5. **Functions**: They provide reusability and help organize your code
6. **Data Types**: JavaScript is dynamically typed - variables can hold different types of values -->



# JavaScript Fundamentals - Complete Notes

## Console Output

The `console.log()` function allows you to see output in the browser console. It's used for debugging and displaying information.

```javascript
console.log("hello world this is my first class in js");
// Output: hello world this is my first class in js
```

## Data Types in JavaScript

JavaScript has 7 primitive data types:

1. **undefined** - Something that hasn't been defined; a variable that hasn't been set to anything yet
2. **null** - Means nothing/empty value  
3. **boolean** - True or False values
4. **string** - Text data
5. **symbol** - Immutable primitive value that is unique
6. **number** - Numeric values (integers and decimals)
7. **object** - Can store multiple key-value pairs

```javascript
var s;
console.log(s); // undefined (because we didn't set it to anything)

var num = 5;        // number
var str = "narjoosa"; // string
var ch = 'a';       // string (character)
var isTrue = true;  // boolean
var nothing = null; // null
```

## Variable Declaration

**Important:** Variable and function names are case sensitive!

### 1. Using `var`
Can be anything of the data types above, commonly used for strings. Can be reassigned to any data type.

```javascript
var myN = "hello";
myN = 5; // Can reset it to another datatype
console.log(myN); // 5
```

### 2. Using `let`
Similar to var but with block scope.

```javascript
let n = "hello";
n = 9; // Can be reassigned
console.log(n); // 9
```

### 3. Using `const`
A variable that should never change - it cannot be reassigned.

```javascript
const pi = 3.14;
// pi = 9; // This will cause an error because const cannot be changed
console.log(pi); // 3.14
```

### Variable Scope Differences:
- **var**: Can be used throughout the whole program (function scope)
- **let**: Will only be used within the scope where you declared it (block scope)  
- **const**: Is a variable that should never change

```javascript
// Example of variable reassignment
var s;
console.log(s); // undefined

var num = 5;
var str = "narjoosa";
var ch = 'a';

s = 0;
num = ch;
s = 'k';
console.log(s);   // 'k' (takes the last assignment)
console.log(num); // 'a'
```

## Mathematical Operations

### Addition
Adding numbers together using the + operator.

```javascript
let a = 20 + 1;
console.log(a); // 21
```

### Subtraction
Subtracting numbers using the - operator.

```javascript
let sub = 50 - 49;
console.log(sub); // 1
```

### Multiplication
Multiplying numbers using the * operator.

```javascript
let m = 3 * 7;
console.log(m); // 21
```

### Division
Dividing numbers using the / operator.

```javascript
let d = 2 / 8;
console.log(d); // 0.25
```

### Incrementing
To increment a number means adding one to it. Instead of doing `j += 1` or `j = j + 1`, we can use `j++`.

```javascript
let j = 5;
j++; // Same as j += 1 or j = j + 1
console.log(j); // 6
```

### Decrementing
To decrement a number means subtracting one from it.

```javascript
let q = 11;
q--;
console.log(q); // 10
```

### Decimal Numbers (Floating Point)
These are sometimes referred to as floating point numbers. Anything with a decimal point is a decimal number.

```javascript
var f = 5.9; // Decimal number
f++;
console.log(f); // 6.9
```

### Multiply Decimal Numbers
Same as multiplying integers.

```javascript
var f = 5.001 * 5;
console.log(f); // 25.005000000000003

f = 2.5 * 2.0;
console.log(f); // 5

f = 5.00 * 6;
console.log(f); // 30
```

### Divide Decimal Numbers
Same process as regular division.

```javascript
var div = 2.2 / 8.4;
console.log(div); // 0.26190476190476195
```

### Remainder (Modulus)
The % operator gives you the remainder when dividing two numbers.

```javascript
var t = 11 % 3;
console.log(t); // 2 (remainder when 11 is divided by 3)
```

### Compound Assignment with Augmented Addition
Instead of doing `o = o + 9`, we can use `o += 9`.

```javascript
let o = 20;
o += 9; // Same as o = o + 9
console.log(o); // 29
```

### Compound Assignment with Augmented Subtraction
Instead of doing `ll = ll - 9`, we can use `ll -= 9`.

```javascript
let ll = 20;
ll -= 9; // Same as ll = ll - 9
console.log(ll); // 11
```

**Note:** Same process works for multiplication (`p *= 9`) and division (`p /= 9`).

## Strings

### Declare String Variables
Strings are declared using quotes (single or double).

```javascript
var first = "narjes";
var last = " almasri";
console.log(first + last); // "narjes almasri"
```

### Escaping Literal Quotes
Putting double quotes inside double quotes can be done by putting `\` before the `"`.

```javascript
var first = "\"this is\" narjes \"al 3asal\"";
console.log(first); // "this is" narjes "al 3asal"
```

### Quoting Strings with Single Quotes
You can use single quotes to wrap strings, and escape single quotes inside with `\'`.

```javascript
var cc = 'hello';
console.log(cc); // hello

cc = ' this is \'insane\'';
console.log(cc); // this is 'insane'

var i = '\"this is\" narjes \"al 3asal\"';
console.log(i); // "this is" narjes "al 3asal"

// We can remove the backslash when using single quotes around double quotes
var i = '"this is" narjes "al 3asal"';
console.log(i); // "this is" narjes "al 3asal"

var i = "heyy 'im here' ";
console.log(i); // heyy 'im here'

// Using template literals (backticks) to print both types of quotes
var i = `'heyy "im here" '`;
console.log(i); // 'heyy "im here" '
```

### Escape Sequences in Strings
Special characters that create formatting effects:

- `\'` - single quote
- `\"` - double quote  
- `\\` - backslash
- `\n` - newline
- `\r` - carriage return
- `\t` - tab
- `\b` - backspace
- `\f` - form feed

```javascript
var soso = "hello there\n This is narjes\t the smartest \fgirl out there \nas we \"all \r know";
console.log(soso);
/* Output:
hello there
 This is narjes	 the smartest girl out there 
as we "all 
 know
*/
```

### Concatenating with + Operator
Joining strings together using the + operator.

```javascript
var l = "this is ";
console.log(l + "narjes"); // "this is narjes"
```

### Concatenating with Plus Equals Operator
Adding to the end of an existing string.

```javascript
var l = "this is ";
l += "wooow";
console.log(l); // "this is wooow"
```

### Constructing Strings with Variables
Building strings using multiple variables.

```javascript
var ss = "je mapple";
var w = ss + " narjes" + " almasri";
console.log(w); // "je mapple narjes almasri"
```

### Appending Variables to Strings
Adding variables to existing strings.

```javascript
var first = "hello ";
var sec = "welcome";
first += sec;
console.log(first); // "hello welcome"
```

### Length of a String
To find the length of a string, we use the `.length` property.

```javascript
var first = "hello ";
var sec = "welcome";
console.log(first.length); // 6

// We can store the length in a variable
var len = sec.length;
console.log(len); // 7
console.log(first.length); // 13 (after concatenation)
```

### Bracket Notation to Find First Character
The bracket notation `[0]` gives us the first letter stored at index 0.

```javascript
var first = "hello";
var kk = first[0];
console.log(kk); // 'h' (the first letter of "hello")
```

### String Immutability
Strings are immutable in JavaScript - once you create a string, you can't change its individual characters. You can only replace the whole string. (Note: Arrays CAN be changed.)

```javascript
var first = "hello";
first[0] = "k"; // This will do nothing - strings are immutable
console.log(first); // "hello" (unchanged)

first = "kello"; // This replaces the whole string
console.log(first); // "kello"
```

### Find the Nth Character
To find the 2nd element (or any position) in the string, use bracket notation.

```javascript
var first = "hello";
var secelement = first[1];
console.log(secelement); // 'e' (second character)
```

### Bracket Notation to Find Last Character
To get the last character, use `[string.length - 1]`.

```javascript
var first = "hello";
var last_element = first[first.length - 1];
console.log(last_element); // 'o'

// Alternative: using slice(-1) method
var z = first.slice(-1);
console.log(z); // 'o'
```

**How slice(-1) works:** The `slice()` method extracts a section of a string. When you use a negative number like `-1`, it counts from the end of the string. So `slice(-1)` gets the last character, `slice(-2)` gets the last 2 characters, etc.

### Bracket Notation to Find Nth to Last Character
To get the 3rd or 4th letter from the end, subtract how much you want from the length.

```javascript
var first = "hello";
var third = first[first.length - 3];
console.log(third); // 'l' (third character from the end)
```

### Word Blanks Function Example
Creating a function that builds sentences with parameters.

```javascript
function wordBlank(first_name, middle_name, last_name) {
  var res = "";
  res += "My name is " + first_name + middle_name + last_name;
  return res;
}
console.log(wordBlank("Narjes ", " Mohammad ", "Almasri"));
// Output: "My name is Narjes  Mohammad Almasri"
```

## Arrays

### Store Multiple Values in Array
Arrays can store multiple values. Syntax: `let myArray = [item1, item2, item3, ...]`

```javascript
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true]; // Can store any data type

var arr = ["this", "is", "my 1", "array", 6];
console.log(arr[4]); // 6
```

### Nested Arrays (Multidimensional Array)
The first element in the array can be an array itself.

```javascript
var arr2 = [["first", 1], ["second", 2]];
console.log(arr2[0]); // ['first', 1]
```

### Access Array Data with Index
Using the index to access specific elements.

```javascript
var arr2 = [["first", 1], ["second", 2]];
var last_element_inarr2 = arr2.length - 1;
console.log(arr2[last_element_inarr2]); // ['second', 2]
console.log(arr2[0]); // ['first', 1]
```

### Modify Array Data with Indexes
You can change array elements by assigning new values to specific indexes.

```javascript
var arr = ["this", "is", "my 1", "array", 6];
arr[2] = "my first";
console.log(arr); // ['this', 'is', 'my first', 'array', 6]
```

### Access Multi-Dimensional Arrays with Indexes
Accessing elements in nested arrays using multiple brackets.

```javascript
var multi = [
  [1, 2, 3],
  ["sec", "arr"],
  ['a', 'b', 'c'],
  [["f", 1, "last"], "array", 97]
];

console.log(multi[0][1]); // 2
console.log(multi[1][1]); // "arr"
console.log(multi[3][0]); // ["f", 1, "last"]
```

### Manipulate Arrays with push()
We can append data to the end of the array with the `push()` function.

```javascript
var arr = ["this", "is", "my first", "array", 6];
arr.push("lasssst");
console.log(arr); // ['this', 'is', 'my first', 'array', 6, 'lasssst']

var ar = ["append", "ing"];
ar.push([" array to array", 1]);
console.log(ar); // ['append', 'ing', [' array to array', 1]]
```

### Manipulate Arrays with pop()
We can remove elements from the end of the array with the `pop()` function.

```javascript
var arr = ["this", "is", "my first", "array", 6, "lasssst"];
arr.pop();
console.log(arr); // ['this', 'is', 'my first', 'array', 6]

// We can store what we popped
var ar = ["append", "ing", [" array to array", 1]];
let popped = ar.pop();
console.log(ar); // ['append', 'ing']
console.log(popped); // [' array to array', 1]
```

### Manipulate Arrays with shift()
The `shift()` function is similar to `pop()` except it removes the first element instead of the final element.

```javascript
var arr = ["this", "is", "my first", "array", 6];
var y = arr.shift();
console.log(y); // "this"
console.log(arr); // ['is', 'my first', 'array', 6]
```

### Manipulate Arrays with unshift()
The `unshift()` function is similar to `push()` but adds elements to the beginning of the array instead of the end.

```javascript
var arr = ["is", "my first", "array", 6];
let rr = arr.unshift("Happy");
console.log(arr); // ['Happy', 'is', 'my first', 'array', 6]
console.log(rr); // 5 (returns the new length of the array)
```

### Shopping List Example
Creating an array of arrays for a shopping list.

```javascript
var my_shopping_list = [
  ["coffee", "3$"],
  ["green apples", "2$"],
  ["keyboard", "10$"]
];
```

## Functions

### Write Reusable Code with Functions
To declare a function, use this syntax:

```javascript
function nameoffun() {
  // function body
}
```

Example of a reusable function:

```javascript
function reuseme() {
  console.log("booooo");
}
reuseme(); // Call the function
// Output: booooo
```

### Passing Values to Functions with Arguments
When a function is called, we can pass data into that function using parameters.

```javascript
function subb(a, b) {
  console.log(a - b);
}
subb(10, 5); // Output: 5
```

## Variable Scope

### Global Scope and Functions
Scope refers to the visibility of variables. Variables defined outside of a function block have global scope. Global scope means they can be seen everywhere in your JavaScript code.

```javascript
var g = 5; // Global variable

function myfun(a) {
  console.log(g + a); // Can access global variable
}
myfun(5); // Output: 10

function checking() {
  var out = "";
  if (typeof g != "undefined") {
    out += "my global var is = " + g;
  }
  console.log(out);
}
checking(); // Output: "my global var is = 5"
```

### Creating Global Variables Without Keywords
If you declare a variable without using `var`, `let`, or `const`, the variable becomes global automatically.

```javascript
function funn() {
  p = 5; // No var/let/const → becomes global!
  console.log(p + 7); // 12
}
funn();
console.log(p); // 5 - can print it outside the function because it's global
```

### Local Scope
Variables declared inside a function are only visible within that function.

```javascript
function locall() {
  var sp = 10; // This is only visible inside this function
  console.log(sp); // 10
}
locall();
// console.log(sp); // This would cause an error - sp is not accessible outside its scope
```

## Variable Declaration Summary

| Keyword | Scope | Reassignable? | Redeclarable? |
|---------|-------|---------------|---------------|
| `var` | function | ✅ Yes | ✅ Yes |
| `let` | block | ✅ Yes | ❌ No |
| `const` | block | ❌ No | ❌ No |
| No keyword | global* | ✅ Yes | ✅ Yes |

**Reassignment** → Changing the value  
**Redeclaration** → Repeating the declaration

## Advanced Function Concepts

### Local vs Global Scope in Functions
It's possible to have local and global variables with the same name. When this happens, the local variable takes precedence (has priority) over the global variable.

```javascript
var so = "out";
function gg() {
  var so = "inside";
  return so;
}
console.log(gg()); // "inside"
console.log(so);   // "out"
```

### Return a Value from a Function
Functions can return values that can be used elsewhere in your code.

```javascript
function subtr(num) {
  return num - 5;
}
console.log(subtr(10)); // 5

function times(num) {
  return num * 5;
}
console.log(times(10)); // 50
```

### Undefined Value Returned from a Function
If we didn't specify a return value, the return value is just `undefined`.

```javascript
var count = 0;
function example() {
  count += 3;
}
console.log(example()); // undefined
```

### Assignment with a Returned Value
It's simple to assign a return value to a variable.

```javascript
var gl = 0;
function funnnn(sum) {
  sum += 5;
  return sum;
}
gl = funnnn(10);
console.log(gl); // 15
```

### Stand in Line Function
A queue-like function that adds an item to the array and returns the first item of that array (like a queue - puts input at the end and returns the first item).

```javascript
function nextinLine(arr, num) {
  arr.push(num);        // Add num at the end of the array
  var item = arr.shift(); // Remove the 1st item and return it
  return item;
}

arr = [1, 2];
console.log("bef=", JSON.stringify(arr)); // bef= [1,2]
console.log(nextinLine(arr, 3));          // 1
console.log("aft=", JSON.stringify(arr)); // aft= [2,3]
```

**Note:** `JSON.stringify(arr)` is a way to change an array into a string that can easily be printed out on the screen.

## Boolean Values

### Boolean Data Type
Booleans are a datatype in JavaScript. There are only 2 values: `true` or `false`.

```javascript
function bool() {
  return true;
}
console.log("bool=", bool()); // bool= true
```

## Conditional Statements

### If Statements
If statements allow you to execute code based on conditions.

```javascript
function checking(isT) {
  if (isT)
    return "this was True";
  return "this was False";
}
console.log(checking(true)); // "this was True"
```

### Comparison with Equality Operator (==)
The `==` operator is used for comparison/checking something. Note the difference:
- `=` → assigning value to a variable
- `==` → for comparison/checking

```javascript
function isequall(val) {
  if (val == 5)
    return "equal";
  return "not equal";
}
console.log(isequall('5')); // "equal"
```

### Comparison with Strict Equality Operator (===)

**The difference between `==` and `===`:**
- `==` performs type conversion before comparing: `'5' == 5` is `true`, `null == undefined` is `true`
- `===` (Strict Equality) does NOT perform type conversion: `'5' === 5` is `false`, `null === undefined` is `false`

```javascript
function Triple(val) {
  if (val === 5)
    return "equal";
  return "not equal";
}
console.log(Triple('5')); // "not equal"
console.log(Triple(5));   // "equal"

function equality(val1, val2) {
  var res = "";
  if (val1 == val2)
    res += "equal in == ";
  else
    res += " not equal in ==";
  if (val1 === val2)
    res += "equal in === ";
  else
    res += " not equal in ===";
  return res;
}

console.log(equality(1, "1")); // "equal in ==  not equal in ==="
console.log(equality(1, '1')); // "equal in ==  not equal in ==="
console.log(equality(1, 1));   // "equal in == equal in ==="
console.log(equality("1", '1')); // "equal in == equal in ==="
```

### Inequality Operators (!= and !==)
Used to check if values are NOT equal.

```javascript
function isequal(val) {
  if (val != 5)
    return "yes its not equal";
  return "no its equal";
}
console.log(isequal('5'));  // "no its equal"
console.log(isequal(50));   // "yes its not equal"

function Triplee(val) {
  if (val !== 5)
    return "yes its not equal";
  return "no its equal";
}
console.log(Triplee('5')); // "yes its not equal" (5 !== '5' is true)
console.log(Triplee(5));   // "no its equal"
```

### Comparison Operators (>, >=, <, <=)
Used to compare numeric values.

```javascript
function test(val) {
  if (val >= 100)
    return "100 or over";
  if (val >= 10)
    return "10 or over";
  return "its not over 100 nor 10";
}

function less(val) {
  if (val <= 100)
    return "100 or under ";
  if (val <= 10)
    return "10 or under";
  return "its not under 100 nor 10";
}
```

### Logical Operators (&& and ||)
- `&&` (AND): Both conditions must be true
- `||` (OR): At least one condition must be true

```javascript
function lesss(val) {
  if (val <= 100 && val >= 100)
    return "100 or under ";
  if (val <= 10 || val >= 10)
    return "10 or under";
  return "its not under 100 nor 10";
}
console.log(lesss(5));   // "10 or under"
console.log(lesss(100)); // "100 or under"
console.log(lesss(101)); // "10 or under"
```

## Switch Statements

### Basic Switch Statement
Instead of using nested (chained) else if statements, we can use Switch Statements. Switch statements test a value and can have many case statements which define various possible values.

The switch statement uses strict comparison (===) to match the value of the switch(expression) against each case. The case must match the value exactly using `===` (strict comparison).

```javascript
function swit(val) {
  var res = "";
  switch (val) {
    case 1:
      res = "alpha";
      break; // If we don't break, it will run through all the rest of cases
    case 2:
      res = "beta";
      break;
    case 3:
      res = "gamma";
      break;
    case 4:
      res = "delta";
      break;
  }
  return res;
}
console.log("the res=", swit(1)); // "the res= alpha"

function s2(val) {
  switch (val % 2 == 0) { // This is a boolean expression (true or false)
    case true:
      console.log("its even");
      break;
    case false:
      console.log("its odd");
      break;
  }
}
s2(1); // "its odd"
s2(4); // "its even"

// Example showing strict equality
let val = '1'; // string
switch (val) {
  case 1:
    console.log("Number 1"); // won't run
    break;
  case '1':
    console.log("String 1"); // this runs → "String 1"
    break;
}
```

### Default Option in Switch Statement
The default option is like the `else` in an if-else statement.

```javascript
function sw(val) {
  var res = "";
  switch (val) {
    case "a":
      res = "its a";
      break;
    case 'b':
      res = "its b";
      break;
    case 'c':
      res = "its c";
      break;
  }
  return res;
}
console.log(sw('a'));     // "its a"
console.log(sw("apple")); // "" (empty string because "apple" === "a" is false)
console.log(sw("a"));     // "its a"
console.log(sw('b'));     // "its b"

// With default option:
function sww(val) {
  var res = "";
  switch (val) {
    case "a":
      res = "its a";
      break;
    case 'b':
      res = "its b";
      break;
    case 'c':
      res = "its c";
      break;
    default: // Like the else in if-else
      res = "nothing achieved";
      break;
  }
  return res;
}
console.log(sww(2)); // "nothing achieved"
```

### Multiple Switch Cases with Same Value
If we want multiple switch cases to return the same value:

```javascript
function re(val) {
  var res = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      res = "high";
      break;
    case 5:
    case 6:
    case 7:
      res = "highest";
      break;
  }
  return res;
}
console.log(re(4)); // "" (empty string)
console.log(re(1)); // "high"
console.log(re(5)); // "highest"
console.log(re(7)); // "highest"
```

### Converting Chained If-Else to Switch
You can convert chained if statements to switch statements:

```javascript
// Instead of chained if-else:
// if (val === "bob") {
//   answer = "Marley";
// } else if (val === 42) {
//   answer = "The Answer";
// } ...

function chainToSwitch(val) {
  var res = "";
  switch (val) {
    case "bob":
      res = "Marley";
      break;
    case 42:
      res = "The Answer";
      break;
    case 1:
      res = "There is no #1";
      break;
    case 99:
      res = "Missed me by this much!";
      break;
    case 7:
      res = "Ate Nine";
      break;
  }
  return res;
}
console.log(chainToSwitch(42));   // "The Answer"
console.log(chainToSwitch(1));    // "There is no #1"
console.log(chainToSwitch("bob")); // "Marley"
console.log(chainToSwitch("b"));   // "" (empty string)
```

## Advanced Function Patterns

### Returning Boolean Values from Functions
All comparison operators return boolean values. Instead of using if-else to return true/false, you can return the comparison directly.

```javascript
// Instead of this:
// function bo(a, b) {
//   if (a > b)
//     return true;
//   else
//     return false;
// }

// Do this:
function bo(a, b) {
  return a > b;
}
console.log(bo(10, 5)); // true
```

### Return Early Pattern for Functions
You can return early from functions to avoid unnecessary code execution.

```javascript
function early(a, b) {
  if (a < 0 || b < 0)
    return undefined;
  return a > b;
}
console.log(early(-8, 5)); // undefined
```

### Counting Cards Example
A practical example using switch statements and global variables:

```javascript
var count = 0;

function Card(card) {
  var holdvalue = "hold";
  switch (card) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "A":
    case "K":
      count--;
      break;
  }

  if (count > 0)
    holdvalue = "Bet";
  return count + " " + holdvalue;
}
console.log(Card(5)); // "1 Bet"
```

## Objects

### Build Objects
Objects are similar to arrays except that instead of using indexes to access data, we use properties. JavaScript objects are a way to store flexible data - they let you group related data and behavior together.

**Why use objects?**
- You want to store multiple values under a single variable name
- You want key-value pairs
- You want to group properties and methods together

**Object Syntax:**
```javascript
const objectName = {
  key1: value1, // Called a "property" - everything before : is property, after : is value
  key2: value2,
  // You can also add methods (functions):
  methodName: function() {
    // code
  }
};
```

Example object:
```javascript
var myObj = {
  "first_name": "Narjes",
  "middle_name": "Mohammad",
  "last name": "almasri",
  21: "hello"
};
```

### Accessing Object Properties
There are two ways to access properties:

**1. Dot Notation:** (Cannot be used if property name has spaces)
```javascript
var fn = myObj.first_name;
console.log(fn); // "Narjes"
```

**2. Bracket Notation:** (Can be used anytime, required when property name has spaces)
```javascript
var ln = myObj["last name"];
console.log(ln); // "almasri"
```

### Accessing Object Properties with Variables
Declare a variable and assign it the property name, then use the variable to access the object:

```javascript
var age = 21;
var n = myObj[age];
console.log(n); // "hello"
```

### Updating Object Properties
You can change the value of existing properties:

```javascript
myObj[21] = "age";
console.log(myObj[21]); // "age" (changed from "hello")
```

### Add New Properties to Objects
Use dot operator or bracket notation to add new properties:

```javascript
myObj.new = "this is the new property ";
console.log(myObj.new); // "this is the new property "
```

### Deleting Properties from Objects
Use the `delete` keyword to remove properties:

```javascript
delete myObj.new;
console.log(myObj);
/* Output:
{
  '21': 'age',
  first_name: 'Narjes',
  middle_name: 'Mohammad',
  'last name': 'almasri'
}
*/
```

### Using Objects for Lookups
Instead of using switch statements, you can use objects for lookups:

```javascript
function c(val) {
  var res = "";
  var obj = {
    "alpha": "adams",
    "bravo": "boston",
    "charlie": "chicago",
    "delta": " denver",
    "easy": "foxtrot"
  };
  res = obj[val];
  return res;
}
console.log(c("alpha")); // "adams"
```

### Testing Objects for Properties
Use the `hasOwnProperty` method to check if an object has a specific property. It returns a boolean.

```javascript
var i = {
  "first": "hello",
  "sec": "b",
  "third": "wooho"
};

function check(val) {
  if (i.hasOwnProperty(val))
    return "yes " + " " + i[val];
  else
    return " No";
}
console.log(check("sec")); // "yes  b"
console.log(check("s"));   // " No"
console.log(check(55));    // " No"
```

### Manipulating Complex Objects
Arrays can contain objects, and objects can contain arrays:

```javascript
var myArray = [
  // First element in the array is an object
  {
    1: "one",
    2: "two",
    3: "three",
    4: ["f", "o", "u", "r"],
    5: "five"
  },
  // Second element in the array is also an object
  {
    "alpha": "adams",
    "bravo": "boston",
    "charlie": "chicago",
  }
];

console.log(myArray[1].alpha);  // "adams"
console.log(myArray[0][4][1]);  // "o"
console.log(myArray[0][5]);     // "five"
```

### Nested Objects
Objects can contain other objects:

```javascript
var nestedObj = {
  "felement": "1st ele",
  "sec element": {
    "2nd": "we are in the sec element of the outer obj and the first element in the inner obj",
    2: "inner"
  },
  "third": "3rd ele"
};

var neesteed = {
  "out": {
    "finner": {
      "secinner": {
        "alpha": "first in innerer",
        "beta": "sec in innerer"
      }
    },
    "outt": "book"
  },
  "outer": " sec in the outer"
};

console.log(neesteed.out.finner.secinner.alpha); // "first in innerer"
console.log(neesteed.outer);                     // " sec in the outer"
console.log(neesteed.out.outt);                  // "book"
console.log(neesteed.out.finner.secinner.beta);  // "sec in innerer"
```

### Complex Object Manipulation Example
Working with a collection object that contains multiple records:

```javascript
var collection = {
  "2000": {
    "fg": "noor",
    "age": "25"
  },
  "1998": {
    "sg": "sofia",
    "agee": " 26"
  },
  "1996": {
    "m": "saleh",
    "ageee": "29"
  }
};

// JSON.parse(JSON.stringify(collection)) creates a copy of the object
var cpy = JSON.parse(JSON.stringify(collection));

function update(id, properity, value) {
  if (value === "") // If value is empty, delete the property
    delete collection[id][properity];
  else if (properity === "age")
    collection[id][properity] = collection[id][properity] || [value]; // Create if doesn't exist
  else
    collection[id][properity] = [value]; // Update property value
  return collection;
}

console.log(update("2000", "age", "")); // Deletes age property from 2000 object
console.log(update("2000", "age", "12")); // Creates age property with value ["12"]
console.log(update("2000", "fg", "kk")); // Updates fg property to ["kk"]
```

**Note about the OR operator in objects:** `collection[id][properity] = collection[id][properity] || [value]` means:
- If the property already exists → keep it
- If the property doesn't exist → create it as an array with value inside

## Loops

### While Loops
The `while` loop continues to execute as long as the condition is true:

```javascript
var myarr = [];
console.log("before", myarr); // before []
var i = 0;
while (i <= 5) {
  myarr.push(i);
  i++;
}
console.log("after", myarr); // after [0, 1, 2, 3, 4, 5]

// Iterating through an array with while loop
let arra = ["hello", "this", "is", "my array"];
i = 0;
while (i < arra.length) {
  console.log("index ", i, " = ", arra[i]);
  i++;
}
/* Output:
index  0  =  hello
index  1  =  this
index  2  =  is
index  3  =  my array
*/
```

### For Loops
The `for` loop is more compact and commonly used for counting:

```javascript
var arraaayyyy = [];
for (var i = 0; i <= 5; i++) {
  arraaayyyy.push(i);
}
console.log("pushing values", arraaayyyy); // [0, 1, 2, 3, 4, 5]
console.log(arraaayyyy.length); // 6

// Important: Store length in variable when modifying array during loop
const leeeeen = arraaayyyy.length;
for (var i = 0; i < leeeeen; i++) { // If we put arraaayyyy.length in condition, it changes during loop
  arraaayyyy.pop();
  console.log("arraaaaay = ", arraaayyyy.length);
}
console.log("deleting values", arraaayyyy); // []
```

### Iterate Odd and Even Numbers with For Loop
```javascript
var arraaayyyy = [];
var even = [];
for (var i = 0; i <= 10; i++) {
  if (i % 2 != 0)
    arraaayyyy.push(i);
  else
    even.push(i);
}
console.log("pushing odd nums = ", arraaayyyy);  // [1, 3, 5, 7, 9]
console.log("pushing even nums = ", even);       // [0, 2, 4, 6, 8, 10]

// Alternative method for even numbers
var e = [];
for (var i = 0; i <= 10; i += 2) {
  e.push(i);
}
console.log(e); // [0, 2, 4, 6, 8, 10]

// For odd numbers (start from 1)
var odd = [];
for (var i = 1; i <= 10; i += 2) {
  odd.push(i);
}
console.log(odd); // [1, 3, 5, 7, 9]
```

### Backwards Iteration (From 10 to 0)
```javascript
// Even numbers backwards
var back = [];
for (var i = 10; i >= 0; i -= 2) {
  back.push(i);
}
console.log("backwards for evens=", back); // [10, 8, 6, 4, 2, 0]

// Odd numbers backwards
var bodd = [];
for (var i = 9; i > 0; i -= 2) {
  bodd.push(i);
}
console.log("backwards for odds=", bodd); // [9, 7, 5, 3, 1]
```

### Using For Loops to Iterate Through Arrays
```javascript
var nums = [1, 2, 3, 4, 5, 10];
var sum = 0;
for (var i = 0; i < nums.length; i++) {
  console.log(nums.length);
  sum += nums[i];
}
console.log("sum = ", sum); // sum = 25
```

### Nested Loops
Loops inside loops, useful for working with multidimensional arrays:

```javascript
var arrrrr = [[1, 2], ['a', 'b'], [3, 4, 5]];
for (var i = 0; i < arrrrr.length; i++) {
  for (var jj = 0; jj < arrrrr[i].length; jj++) {
    console.log("elements", arrrrr[i][jj]);
  }
}
/* Output:
elements 1
elements 2
elements a
elements b
elements 3
elements 4
elements 5
*/

// Example: Multiply all elements in nested array
var arrrrray = [[1, 2], [1, 2], [3, 4, 5]];
var multi = 1;
for (var i = 0; i < arrrrray.length; i++) {
  for (var jj = 0; jj < arrrrray[i].length; jj++) {
    multi *= arrrrray[i][jj];
  }
}
console.log("multi=", multi); // multi= 240
```

### Do...While Loops
Executes the code block once before checking the condition:

```javascript
var i = 0;
var Arr = [1, 2, 3];
var Alen = Arr.length;
while (i < Alen) {
  Arr.shift();
  i++;
  console.log("index ", " ", i, " = ", Arr);
}
console.log(Arr); // []
/* Output:
index    1  =  [2, 3]
index    2  =  [3]
index    3  =  []
[]
*/
```

## Key Takeaways

1. **Variable Declaration**: Use `const` by default, `let` when you need to reassign, avoid `var` in modern JavaScript
2. **Scope**: Understand the difference between global, function, and block scope  
3. **String Immutability**: You cannot change individual characters of a string, only replace the entire string
4. **Array Methods**: `push/pop` work with the end, `unshift/shift` work with the beginning
5. **Functions**: They provide reusability and help organize your code
6. **Data Types**: JavaScript is dynamically typed - variables can hold different types of values
7. **Objects**: Use objects to group related data and provide key-value pair storage
8. **Loops**: Choose the right loop type - `for` for counting, `while` for conditions, nested loops for multidimensional data
9. **Comparison Operators**: Remember the difference between `==` (loose equality) and `===` (strict equality)
10. **Switch Statements**: Use for multiple specific value comparisons instead of chained if-else statements