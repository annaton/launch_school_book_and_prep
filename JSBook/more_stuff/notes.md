**Variables as Pointers**
<p>Developers sometimes talk about references instead of pointers. At Launch School, we use both terms interchangeably. You can say that a variable points to or references an object in memory, and you can also say that the pointers stored in variables are references. Some languages make a distinction between references and pointers, but JavaScript does not; feel free to use either term.
</p>

<p>As we've learned, JavaScript values fall into one of two broad categories: primitive values and objects. Primitive values are easier to understand, so we'll start there.
</p>

<p>Working with Primitive Values
<br>Let's take a quick look at how primitive values and the variables assigned to them relate. Consider the following code:
</p>

```
let count = 1;
count = 2;
```

<p>This code is simple and not too difficult to understand, even if it isn't very useful. On line 1, we declare a variable named count, and initialize it to a value of 1, which is a primitive value. Line 2 reassigns count to a new primitive value, 2.
</p>

```
> let a = 5
> let b = a
> a = 8
> a
= 8

> b
= 5
```

<p>Nothing is surprising in that code. We initialize a to the value 5, then assign b to the value of a: both variables contain 5 after line 2 runs.

<br>Next, we reassign variable a to a value of 8 on line 3, and on lines 4 and 5 we see that a does indeed now have the value 8. On lines 7 and 8 we see that b's value did not change: it is still 5.

<br>That's straightforward and easy enough to understand: each variable has a value, and reassigning values does not affect any other variables that happen to have the same value. Thus, a and b are independent: changing one doesn't affect the other.
</p>

<p>What's crucial to understand at this point is that variables that have primitive values store those values at the memory location associated with the variable. In our example, a and b point to different memory locations. When we assign a value to either variable, the value gets stored in the appropriate memory location. If you later change one of those memory locations, it does not affect the other memory location, even if they started off with the same value. Therefore, the variables are independent when they contain primitive values.
</p>

<p>Working with objects and non-mutating operations
<br>Now that we know how variables and primitive values relate, let's see how variables and objects relate. Consider the following code:
</p>

```
let obj = { a: 1 };
obj = { b: 2 };
obj.c = 3;
```

<p>As with the first example with primitive values, this code is simple and not too difficult to understand. On line 1, we declare a variable named obj, and initialize it to { a: 1 }, which is an object value. Line 2 reassigns obj to a new object, { b: 2 }. Finally, on line 3, we mutate the object currently referenced by obj by adding a new property to the object.
</p>

<p>What does that look like in the computer? As we learned earlier, creating new variables causes JavaScript to allocate a spot somewhere in its memory for the value. However, with objects, JavaScript doesn't store the value of the object in the same place. Instead, it allocates additional memory for the object, and places a pointer to the object in the space allocated for the variable. Thus, we need to follow two pointers to get the value of our object from its variable name. 
</p>

<p>Let's look at another example. This time, we'll use arrays. Remember that arrays in JavaScript are objects, and almost everything we say about arrays holds for objects as well.
</p>

```
> let c = [1, 2]
> let d = c
> c = [3, 4]
> c
= [ 3, 4 ]

> d
= [ 1, 2 ]
```

<p>Again, this example holds no surprises. For the moment, though, let's ignore what happens on line 2. We can assume that variables c and d end up with the same value after line 2 runes. Reassigning c on line 3 creates a new array, but the code doesn't affect the value of d. The two variables reference different arrays.

<br>This code works as expected since reassignment changes the pointer value of c to reference the new [3, 4] object. Though d originally had the pointer value, it was stored in a different memory location (the location of d). Thus, when we reassign c, we're not changing d -- it still points to the original array.

<br>As with primitive values, this is straightforward: each variable has a value, and reassigning values does not affect any other variables that happen to have the same value. Thus, c and d are independent variables.
</p>

<p>Lets see what happens with a mutating operation like the push method:
</p>

```
> let e = [1, 2]
> let f = e
> e.push(3, 4)
> e
= [ 1, 2, 3, 4 ]

> f
= [ 1, 2, 3, 4 ]
```

<p>As we saw a little earlier, objects (and arrays) aren't stored in the memory location used by the variable. Instead, that memory location points to yet another memory location. That's where the object is ultimately stored.

<br>This uses of pointers has a curious effect when you assign a variable that references an object to another variable. Instead of copying the object, JavaScript only copies the pointer. Thus, when we initialize f with e, we're making both e and f point to the same array: [1, 2]. It's not just the same value, but the same array in the same location in memory. The two variables are independent, but since they point to the same array, that array is dependent on what you do to both e and f.

<br>With e and f pointing to the same array, line 3 uses the pointer in the e variable to access and mutate the array by appending 3 and 4 to its original value. Since f also points to that same array, both e and f reflect the updated contents of the array. Some developers call this aliasing: e and f are aliases for the same value.

<br>Okay, that's good. What happens if we mutate a primitive value? Oops! You can't do that: all primitive values are immutable. Two variables can have the same primitive value. However, since primitive values are stored in the memory address allocated for the variable, they can never be aliases. If you give one variable a new primitive value, it doesn't affect the other.
</p>

<p>Takeaway
<br>The takeaway of this section is that JavaScript stores primitive values in variables, but it uses pointers for non-primitive values like arrays and other objects. Pointers can lead to surprising and unexpected behavior when two or more variables reference the same object in the heap. Primitive values don't have this problem.

When using pointers, it's also important to keep in mind that some operations mutate objects, while others don't. For instance, push mutates an array, but map does not. In particular, you must understand how something like x = [1, 2, 3] and x[2] = 4 differ: both are reassignments, but the second mutates x while the first does not.
</p>

**Method Chaining**

```
let str = 'Pete Hanson';
let names = str.toUpperCase().split(' ').reverse().join(', ');
console.log(names);
// outputs: HANSON, PETE
```

**Regex**

<p>A regular expression—a regex—is a sequence of characters that you can use to test whether a string matches a given pattern. They have a multitude of uses:

Check whether the string "Mississippi" contains the substring ss.
Print the 3rd word of each sentence from a list of sentences.
Replace all instances of Mrs in some text with Ms.
Does a string begin with the substring St?
Does a string end with the substring art?
Does a string contain any non-alphanumeric characters?
Does a string contain any whitespace characters?
Replace all non-alphanumeric characters in a string with a hyphen (-).
</p>

<p>A regex looks like a string written between a pair of forward-slash characters instead of quotes, e.g., /bob/. You can place any string you want to match between the slashes, but certain characters have special meanings. We won't discuss those special meanings, but we'll see some simple examples.
<br>JavaScript uses RegExp objects to store regex: note the spelling and case. Like other objects, RegExp objects can invoke methods. The method test, for instance, returns a boolean value based on whether a string argument matches the regex. Here's how we can use test to determine whether the string "bobcat" contains the letter o or l:
</p>

```
> /o/.test('bobcat')
= true

> /l/.test('bobcat')
= false
```

<p>Boolean values sometimes don't provide enough information about a match. That's when the match method for strings comes in handy. This method takes a regex as the argument and returns an array that describes the match.
</p>

```
// No match
> "bobcat".match(/x/)
= null

// Global match
> "bobcat".match(/[bct]/g)
= [ 'b', 'b', 'c', 't' ]

// Singular match with groups
> "bobcat".match(/b((o)b)/)
= [ 'bob', 'ob', 'o', index: 0, input: 'bobcat', groups: undefined ]
```

<p>If no match occurs, match returns the value null, which conveniently lets us use match in conditionals in the same way as test. We'll see that in action a little further down.

When a match occurs with a regex that contains the /g flag—a global match—the match method returns an array that contains each matching substring. The /g example above returns an array consisting of the matched b (twice, since it appears twice in the string), c, and t letters

When /g isn't present, the return value for a successful match is also an array, but it includes some additional properties:

index: the index within the string where the match begins
input: a copy of the original string
groups: used for "named groups" (we don't discuss named groups in this book)
</p>

<p>As mentioned above, match returns null when a match doesn't occur. You can harness this in conditionals:
</p>

```
function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if (results) {
    // a non-null return value from match is truthy
    console.log(`We have a match! ${results}`);
  } else {
    // a null return value from match is falsy
    console.log('No match here.');
  }
}

has_a_or_e("basketball"); // We have a match! a,e,a
has_a_or_e("football");   // We have a match! a
has_a_or_e("hockey");     // We have a match! e
has_a_or_e("golf");       // No match here.
```

<p>Since match must generate information above and beyond a simple boolean value, it can have performance and memory costs. test is more efficient, so try to use it when you don't need to know anything other than whether the regex matched the string.


</p>

**Dates**


```
> let date = new Date('December 25, 2012')
> date.getDay()
= 2
```

<p>getDay returns a number for the day of the week: 0 represents Sunday, 1 represents Monday, and so on. In this case, we see that December 25, 2012, occurred on a Tuesday.
</p>

<p>
Getting a day name takes a bit more work, but it's not difficult:
</p>

```
function getDayOfWeek(date) {
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return daysOfWeek[date.getDay()];
}

let date = new Date('December 25, 2012');
console.log(getDayOfWeek(date)); // logs Tuesday
```

**Exceptions**
<p>Exception handling is a process that deals with errors in a manageable and predictable manner. For now, you should be familiar with how exception handling works and what it looks like in a program. The reserved words try and catch (and sometimes finally) often occur in real-world JavaScript programs, so you should learn enough to understand what they do.
<br>JavaScript's try/catch statement provides the means to handle exceptions. The basic structure looks like this:
</p>

```
try {
  // perform an operation that may produce an error
} catch (exception) {
  // an error has occurred. do something about it here.
  // for example, log the error
} finally {
  // Optional 'finally' block; not used often
  // Executes even if an exception occurs.
}
```

<p>Let's look at a typical situation. One common JavaScript error occurs when we call a method on the values undefined or null. Look at the following code and test it in Node or your browser's console:

</p>

```
let names = ['bob', 'joe', 'steve', undefined, 'frank'];
names.forEach(name => {
  console.log(`${name}'s name has ${name.length} letters in it.`);
});

// Log output
// bob's name has 3 letters in it.
// joe's name has 3 letters in it.
// steve's name has 5 letters in it.
// TypeError: Cannot read property 'length' of undefined
//     at names.forEach (repl:2:42)
//     at Array.forEach (<anonymous>)
```


<p>This program raises an error when it tries to access the length property on the undefined value at names[3]. It then prints a stack trace and halts program execution; it ignores the last entry in the array.

Let's add some exception handling to this program:
</p>

```
let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong');
  }
});

// Log output
// bob's name has 3 letters in it.
// joe's name has 3 letters in it.
// steve's name has 5 letters in it.
// Something went wrong
// frank's name has 5 letters in it.
```

<p>To handle the possibility of an exception within the callback to forEach, we place the try block inside the callback. We can put any amount of code in the try block, but most often you want to focus on one or two statements.
</p>

<p>SyntaxError
<br>A special kind of exception occurs if the code can't be handled as valid JavaScript. Such errors cause JavaScript to raise a SyntaxError. A SyntaxError is special in that it occurs immediately after loading a JavaScript program, but before it begins to run. Unlike a TypeError exception that is dependent upon runtime conditions, JavaScript detects syntax errors based solely on the text of your program. Since they are detected before execution begins, you can't use a try/catch statement to catch one.

Here's some code that will cause a syntax error:


</p>

```
console.log("hello");

function foobar()
  // some code here
}

foobar();
```

**Stack Traces**


```
TypeError: Cannot read property 'length' of undefined
    at names.forEach (repl:2:42)
    at Array.forEach (<anonymous>)
```

<p>This error message is a stack trace: it reports the type of error that occurred, where it occurred, and how it got there. Such error messages rely on JavaScript's call stack, which we discussed in the Functions chapter.

Let's look at a simpler example. Create a file named error.js with the following content:
</p>

```
function foo() {
  console.log(bar);
}

foo();
```

<p>In this example, JavaScript raises a ReferenceError exception since the variable bar doesn't exist when you try to write it to the log. From the stack trace, we can see that JavaScript detected the error at character 15 on line 2 -- that's where we mention the bar variable -- in the foo function. The rest of the trace tells us that we called foo on line 5 from an anonymous function: one with no name. The trace treats code at the global level as belonging to an anonymous function, so don't worry about the fact that your code doesn't actually have an anonymous function.
</p>

<p>We call this type of output a stack trace since the JavaScript (and most other languages) handle the mechanics of calling functions with a data structure known as the call stack. Each time the program calls a function, JavaScript places some information about the current program location on the top of the call stack. When the program finishes running the function, it removes the corresponding item from the top of the stack and uses it to return to the calling location. The stack trace is a readable version of the call stack's content at the point an exception occurred.
</p>

