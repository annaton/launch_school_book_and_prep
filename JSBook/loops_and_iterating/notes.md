<p>Most programs require code that runs over and over until some ending condition occurs.
<br>Most programmming languages, including JavaScript, use loops to provide this capability. 
<br>JavaScript loops have several forms, but the main looping structures use a looping keyword, a condition, and a block. 
<br>These loops execute the loop's body (the block) for as long as the condition remains truthy. 
<br>We use the term one iteration to describe executing the loop body once. JavaScript also has two other loop mechanisms: array abstractions and recursion. 
</p>

**while Loops**
<p>
A while loop uses the while keyword followed by a conditional expression in parentheses and a block. 
<br>The loop executes the block again and again for as long as the conditional expression remains truthy. In most pograms, that loop should ultimately stop repeating.
</p>

```
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter += 1;
}
```

<p>
JavaScript has an even more succint syntax to increment a number by 1:
</p>

```
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}
```

<p>
The increment operator (++) increments its operand by 1; that is, it adds 1 to the existing value. 
<br>There's a corresponding decrement operator (--) that decrements a variable's value by 1. 
</p>

**Looping over arrays with while**

<p>One of the most common uses of loops in programmning is to iterate over the elements of an array and perform some action on each element.
</p>

```
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames); // ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
```

**do/while Loop**
<p>A do/while loop differs visibly from a while loop, but its behavior is almost identical. The crucial difference is that do/while always executes the code in the block at least once. 
<br>A while loop can't make that guarantee since the initial condition may be falsy.
<br>In a do/while loop, the conditional check occurs at the end of the loop instead of the beginning which allows it to run the code at least once, even if the condition is falsy when the loop begins.
</p>

**for Loops**
<p>
for loops have the same purpose as while loops, but they use a condensed syntax that works well when iterating over arrays and other sequences. A for loop combines variable initialization, a loop condition, and the variable increment/decrement expression all on the same line:
</p>

```
for (initialization; condition; increment) {
  // loop body
}
```

<p>The sole difference between a while loop and a for loop is the scope of any variables declared by the initial clause. 
<br>In the while statement, the scope includes the code that surrounds the loop; in the for statement, the scope is the for statement and its body.
</p>


```
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
```

**Controlling Loops**
<p>JavaScript uses the keywords continue and break to provide more control over loops. 
<br>continue lets you start a new iteration of the loop, while break lets you terminate a loop early.
</p>

**continue**
<p>Suppose we want all the uppercase names in our upperNames array except 'Naveed':
</p>

```
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
```

**break**
<p>Break is used if you want to skip all remaining iterations of a loop:
</p>

```
let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
  }
}

console.log(indexOfFive);
```

**Array Iteration**
<p>JavaScript arrays have several methods that iterate over the elements without using any of the looping syntax we've seen. 
</p>

<p>One way is to use the built-in forEach method for arrays:
</p>

```
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function (name) {
  console.log(name);
});
```

<p>One feature of JavaScript that sets it apart from most other languages is that it has first-class functions. That means that functions are values: you can assign them to variables, pass them around as arguments to other functions, and even use them as return values in other functions.
<br>When you pass a function as an argument to anothre function, that other function can call the function represented by the argument. 
</p>

<p>We can make the code more concise by using an arrow function:
</p>

```
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(name => console.log(name));
```

**Recursion**
<p>Recursive functions are functions that call themselves. Such code doesn't look much like a loop, but there's a close relationship between loops and recursion.
<br>The relationship is close enough that we say that recursion is another way to create loops in JavaScript.
<br>Suppose you want to know the result of doubling a number, then the result of doubling that number, and so on until the number reaches some predefined maximum, such as 50:
</p>

```
function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(5);
// logs
// 5
// 10
// 20
// 40
// 80
```

**Exercises**
<p>How to calculate factorial:
</p>

```
function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
```
<p>Factorial using recursion:
</p>

```
function factorial(number) {
  if (number <= 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
```


<p>Side note about for loops: All 3 components of the for loop are optional.
</p>