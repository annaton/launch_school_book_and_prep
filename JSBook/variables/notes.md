<p>One of the most basic concepts of programming is that programs need to store information in memory so that it can use and manipulate that information. 
<br> Variables are the means for doing that in almost all computer languages. They provide a way to label data with a descriptive name that helps us and other readers understand a program.
</p>

## Variables and Variable Names
<p>A variable is simply a named area of a program's memory space where the program can store data. Typically, variables can be changed. That is, we can make a variable point to a different area of memory that has a different value.
</p>

**Declaring and Assigning Variables**
<p>A variable declaration is a statement that asks the JavaScript engine to reserve space for a variable with a particular name and initializes it with a value. The preferred way to declare variables uses the let keyword:
</p>

```
> let firstName
= undefined
```

<p>You can assign a value to firstName as well as reassign the value.
</p>

```
> let firstName = 'Mitchell'
= undefined
```

<p>It's interesting to note that the return value of an assignment is the value on the right-hand side of the = operator, but declarations, with or without an initial value, always return undefined.
</p>

```
> let firstName = 'Mitchell'
= undefined
```

```
> firstName = 'Martha'
= 'Martha'
```

<p>In the following example, we can see that variables reference values in memory that aren't deeply-linked to each other. 
</p>

```
> let a = 4
= undefined

> let b = a
= undefined

> a = 7
= 7

> b = 4
```

**Declaring Constants**

<p>The const keyword is similar to let, but it lets you declare and initialize constant identifiers:
</p>

```
> const firstName = 'Mitchell'
= undefined

> firstName
= Mitchell
```
<p>
Once you initialize a constant, you can't give it another value:
</p>

```
> firstName = 'Joe'
TypeError: Assignment to constant variable.
```
<p>A standard convention when naming constants is to use all uppercase letters and digits in the name; if the name contains multiple words, use underscores to separate the words.
</p>

**Variable Scope**
<p>A variable's scope determines where it is available in a program. **The location where you declare a variable determines its scope.** In JavaScript, variables declared with the let or const keywords have **block** scope.
<br>A block is a related set of JavaScript statements and expressions between a pair of opening and closing curly braces.
</p>

<p>In the following example, let creates a block-scoped variable so an error is thrown:
</p>

```
if (1 === 1) {
  let a = 'foo'
}

console.log(a); // ReferenceError: a is not defined
```

<p>On the other hand, if you declare the variable outside the if block, the variable is available within the block as well as after the block ends.
</p>

```
let a = 'foo';
if (1 === 1) {
  a = 'bar';
}

console.log(a);    // => 'bar'
```