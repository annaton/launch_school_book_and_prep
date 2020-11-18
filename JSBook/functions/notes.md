<p>In JavaScript, we have procedures called functions that let you extract code and run it as a separate unit.
</p>

**Using Functions**
<p>Before you can use a function, you must first define it with the reserved keyword, function.
<br>After the word function, you write the function's name followed by a pair of parenthese ( () ). 
<br> After the closing parenthesis, the code you want to associate with the function - the function body - gets place between curly braces ( {} ). 
</p>

```
function say() {
  console.log('Hi!');
}
```
<p>
Functions are called by typing their name and providing some options values that we call arguments. 
<br>**Arguments let you pass data from outside the function's scope into the function so it can access the data**. 
<br>If the function definition doesn't need access to outside data, you don't need any arguments.
<br>In the definition of a function, the names between parentheses are called parameters. The arguments are the values of those parameters.
<br>Function names and parameters are both considered variable names in JavaScript. 
<br>Parameters, in particular, are **local variables** - they are only defined locally, within the body of the function.
</p>

**Return Values**
<p>One common use of functions is to perform an operation and return a result to the call location for later use.
<br> We do that with **return values** and the return statement.
<br>All JavaScript function calls evaluate to a value. By default, that value is undefined. However, when you use a return statement, you can return a specific value from a function.
</p>

```
function add(a, b) {
  return a + b;
}

add(2, 3); // => returns 5
```

<p>From here, you can capture the return value in a variable. 
</p>

**Default Parameters**

```
function say(words = 'hello') {
  console.log(words + '!');
}

say('Howdy'); // logs Howdy!
say(); // logs hello!
```

<p> You can provide a default value for your parameter so that you can call your function without arguments.
</p>

**Variable Scope**
<p>In JavaScript, there are two types of variables based on where they're accessible: global variables and local variables.
<br>Global variables are available throughout a program, while local variables are confined to a function. The keyword you use to declare a variable and the location where you declare it combine to determine whether the variable is global or local.
</p>

<p>
<br>Global Variables
<br>Global variables have a global scope, which means that they are available everywhere within a program. You can read and reassign them at any time. Any variable declared inside a function or block is a local variable - everything else is a global variable.
<br>Global variables can be useful in some scenarios (app-wide configuration). In general, you should limit the scope of your variables as much as possible.
</p>

<p>
<br>Local Variables
<br>Local variables have a local scope, meaning that you can't access them outside the function that declares them. As with global variables, where you declare a local variable determines its scope.
</p>

```
function greetPeople() {
  let greetingMessage = 'Good Morning';
  console.log(greetingMessage);
}

greetPeople();
```

```
function greetPeople(greetingMessage) {
  console.log(greetingMessage);
}

greetPeople('Good Morning');
```

<p>The greetingMessage parameter acts like a local variable. It is, in fact, a local variable. The chief difference is that we initialize it from the argument passed to the function. Parameters have local scope within a function. 
<br>Local variables are short-lived; they go away when the function that corresponds to their scope stops running. 
<br>Another way to scope variables locally is to use block-scoping. Block scoping occurs when you use let or const inside a block and confines the variable's scope to that block.
</p>


**Functions vs Methods**
<p>How do you convert a string to all uppercase letters? You'll need a syntax called method invocation.
<br>Method invocation occurs when you prepend a variable name or value followed by a period to a function invocation, e.g. 'xyzzy'.toUpperCase().
<br>We call such functions methods. 
</p>

**Mutating the Caller**
<p>Sometimes a method permanently alters the object that invokes the method: it mutates the caller.
<br>For example, the pop() method removes the last element from an array, but it does so destructively: the change is permanent.
<br>The concat method returns a new array that contains a copy of the original array combined with the additional elements that we supply with the arguments.
<br>Since concat creates a copy of the original array and that mutates the copy, it leaves the original array intact.
</p>


```
function addToArray(array) {
  return array.concat(0);
}

let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive)); // logs [1, 2, 3, 4, 5, 0];
console.log(oneToFive); // logs [1, 2, 3, 4, 5]
```

<p>One non-obvious point here is that mutation is a concern when dealing with arrays and objects, but not with primitive values like numbers, strings, and booleans. 
<br>Primitive values are IMMUTABLE!
<br>That means their values never change; operations on immutable values always return new values.
<br>Operations on mutable values (arrays and objects) may or may not return a new value and may or may not mutate data.
</p>

**Function Composition**

```
console.log(add(20, 45));       // => 65
console.log(subtract(80, 10));  // => 70
```

**Three Ways to Define a Function**

```
function functionName(zeroOrMoreArguments...) {
  // function body
}
```

<p>We call the above function definition a function declaration. A notable property of function declarations is that you can call the function before you declare it. 
</p>

```
greetPeople();

function greetPeople() {
  console.log('Good Morning');
}
```

<p>Another way to define a function is called a function expression:
</p>

```
let greetPeople = function() {
   console.log('Good Morning');
};

greetPeople();
```

<p>Most of the function expression looks like a standard function declaration. However, since we're saving it to a variable, it's a function expression instead. 
<br>Function expressions have one key difference from a function declaration: you cannot invoke a function expression before it appears in your program.
<br>Any function definition that doesn't have the word function at the very beginning of a statement is a function expression.
<br>Even wrapping what looks like a function declaration in parenthese creates a function expression:
</p>

```
// This is a function expression, not a declaration

(function greetPeople() {
  console.log('Good Morning');
})
```

<p>There's a third kind of function in JavaScript called an arrow function. Syntactically, arrow functions look radically different from function declarations and expressions:
</p>

```
let greetPeople = () => console.log('Good Morning!');
greetPeople();
```
<p>Arrow functions are similar to function expressions, but they use a different syntax. 
<br>One interesting property of arrow functions is implicit returns. 

</p>

```
let add = (a, b) => a + b;
```
<p>Note the lack of a return statement. We can omit it in arrow functions when the function body contains one expression. 
</p>

