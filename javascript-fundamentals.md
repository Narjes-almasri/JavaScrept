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
6. **Data Types**: JavaScript is dynamically typed - variables can hold different types of values
