**Conditionals**
<p>A conditional is a fork (or multiple forks) in the road. The simplest conditionals use a combination of if statements with comparison and logical operators.
<br>(<, >, <=, >=, ==, ===, !=, !==, &&, ||) to direct traffic. They use the keywords if and else.
<br>The examples below are all valid JavaScript conditionals:
</p>

```
// Example 1
if (x === 3) {
  console.log("x is 3");
}

// Example 2
if (x === 3) {
  console.log("x is 3");
} else {
  console.log("x is NOT 3");
}

// Example 3
if (x === 3) console.log("x is 3");

// Example 4
if (x === 3)
  console.log("x is 3");

// Example 5
if (x === 3)
  console.log("x is 3");
else
  console.log("x is NOT 3");

// Example 6
if (x === 3) {
  console.log('x is 3');
} else {
  if (x === 4) {
    console.log('x is 4');
  } else {
    console.log('x is NOT 3 or 4');
  }
}

// Example 7
if (x === 3) {
  console.log("x is 3");
} else if (x === 4) {
  console.log("x is 4");
} else {
  console.log('x is NOT 3 or 4');
}
```

<p>
Example 1 demonstrates the simplest if statement: it has a single condition (x === 3) and a single clause—a block, statement, or expression in this context—that executes when the condition is true. When the condition is false, execution resumes with the first expression after the if statement without running the code in the clause.
</p>

<p>
Example 2 demonstrates that you can handle both true and false conditions in the same if statement by using an else clause. When the condition is true, the code in the if clause (the first block) runs; when it's false, the code in the else clause runs. It's important to understand that the else clause is not a separate statement: it's part of the if statement.
</p>

<p>
Examples 3, 4, and 5 show that you don't need a block when the if or else clause contains a single statement or expression. You need braces for a block when you want to execute multiple statements or expressions in a clause. Otherwise, you can omit them.
</p>

<p>
Based on the indentation, it looks like the programmer expects line 3 to execute when x is 3, but not when it has some other value. However, line 3 is not part of the if statement. It's a separate expression that follows the if statement. Though JavaScript allows this practice, you should avoid it in most cases. Blocks make your code more readable and reliable.
</p>

<p>
Examples 6 and 7 both behave the same way. Example 6 uses a nested if statement in the else clause, while example 7 shows the result of removing the block. Here, we can ignore our suggestion to use blocks in if statements; else if is one place where omitting the block is preferable. It's easier to read and maintain example 7 since you don't have the syntactic clutter of extra braces and indentation.
</p>

**Comparisons**
<p>Comparison operators return a boolean value: true or false. 
<br>The expressions or values that an operator uses are its operands. In comparisons, the expressions to the left and right of the operator are the operands.
<br> === The strict equality operator, also known as the identity operator, returns true when the operands have the same type and value, false otherwise. 

```
> 5 === 5
= true

> 5 === 4
= false

> 'abc' === 'abc'
= true

> 'abc' === 'abcd'
= false

> 'abc' === 'aBc'
= false

> '5' === '5'
= true

> '5' === '6'
= false

> 5 === '5'
= false

> '' === 0
= false
```

<p>
<br> Notice that we can compare strings for strict equality. To be strictly equal, two strings must have the exact same value. If there is any difference at all, the strings are not equal.
<br>!==
<br>The strict inequality operator returns false when the operands have the same type and value, true otherwise. 
<br>Note that !== is the inverse of ===: when === returns true, !== returns false, vice versa.
</p>

```
// Compare with the `===` examples.

> 5 !== 5
= false

> 5 !== 4
= true

> 4 !== 156
= true

> 'abc' !== 'def'
= true

> 'abc' !== 'aBc'
= true

> 5 !== '5'
= true
```

<p>== The non-strict eqaulity operator, also known as the loose equality operator, is similar to ===.
<br>However, when the operands have different types, == coerces one of the operands to the other operand's type before it compares them. 
</p>

```
// Compare with the `===` examples.

> 5 == 5
= true

> 5 == 4
= false

> 5 == '5'
= true

> '' == 0
= true
```

<p>!= The non-strict inequality operator, also known as the loose inequality operator, is similar to !==. However, when the operands have different types, != coerces one of the operands to the other operand's type before it compares them. The result is false when the final values are the same, true otherwise.
</p>

```
// Compare with the `==` and `!==` examples.

> 5 != 5
= false

> 5 != 4
= true

> 5 != '5'
= false

> '' != 0
= false
```

<p> < The less than operator returns true when the value of the left operand has a value that is less than the value of the right operand, false otherwise.
</p>

```
> 4 < 5
= true

> 5 < 4
= false

> 5 < 5
= false

> "4" < "5"
= true

> "42" < "402"
= false

> "42" < "420"
= true

> "42" < 420
= true
```

<p> > The greater than operator returns true when the value of the left operand has a value that is greater than the value of the right operand, false otherwise.
</p>

```
// Compare with the `<` examples.

> 4 > 5
= false

> 5 > 4
= true

> 5 > 5
= false

> "4" > "5"
= false

> "42" > "402"
= true

> "42" > "420"
= false

> "42" > 420
= false
```

<p><= The less than or equal to operator returns true when the value of the left operand has a value that is less than or equal to the value of the right operand, false otherwise. Note that =< is not a valid comparison operator.
</p>

```
// Compare with the `<` examples.

> 4 <= 5
= true

> 5 <= 4
= false

> 5 <= 5
= true
```

<p>>= The greater than or equal to operator returns true when the value of the left operand has a value that is greater than or equal to the value of the right operand, false otherwise. Note that => is not a valid comparison operator.
</p>

```
// Compare with the `>` and `<=` examples.

> 4 >= 5
= false

> 5 >= 4
= true

> 5 >= 5
= true
```

**Logical Operators**
<p>
The &&, || and ! logical operators provide the ability to combine conditions:
<br>&& The and operator returns true when both operands are true and false when either operand is false.
</p>

```
> (4 === 4) && (5 === 5)
= true

> (4 === 4) && (5 === 6)
= false

> (4 === 5) && (5 === 5)
= false

> (4 === 5) && (5 === 6)
= false
```

<p>
|| The or operator returns true when either operand is true and false when both operands are false.
</p>

```
> (4 === 4) || (5 === 5)
= true

> (4 === 4) || (5 === 6)
= true

> (4 === 5) || (5 === 5)
= true

> (4 === 5) || (5 === 6)
= false
```

<p>
! The not operator returns true when its operand is false and returns false when the operand is true. That is, it negates its operand. ! takes a single operand; the operand appears to the right of the operator.
</p>

```
> !true
= false

> !false
= true

> !(4 === 4)
= false

> !(4 !== 4)
= true
```

**Short Circuits**
<p>The && and || operators both use a mechanism called short circuit evaluation to evaluate their operands. 
</p>

```
> isRed(item) && isPortable(item)
> isGreen(item) || hasWheels(item)
```

<p>The first expression returns true when item is both red and portable. If either condition is false, then the overall result must be false. Thus, if the program determines that item is not red, it doesn't have to check whether it is portable. JavaScript short-circuits the entire expression by terminating evaluation as soon as it determines that item isn't red. It doesn't need to call isPortable() since it already knows that the entire expression must be false.
<br>Similarly, the second expression returns true when item is either green or has wheels. When either condition is true, the overall result must be true. Thus, if the program determines that item is green, it doesn't have to check whether it has wheels. Again, JavaScript short-circuits the entire expression once it determines that item is green. The entire expression must be true.
</p>

**Truthiness**
<p>JavaScript can coerce any value to a boolean. Thus, you can use any expression in a conditional statement. We often say that the expression evaluates as or evaluates to true or false.
<br>JavaScript treats the following values as false:
*False
*The number 0. This includes all 3 variations of zero in JavaScript: 
<br>0: the ordinary zero value
<br>-0: a negative zero.
<br>0n: the BigInt version of zero
*An empty string ('')
*Undefined
*null
*NaN
<br>When using && and ||, the return value is always the value of the operand evaluated last.
</p>

```
> 3 && 'foo'  // last evaluated operand is 'foo'
= 'foo'

> 'foo' && 3  // last evaluated operand is 3
= 3

> 0 && 'foo'  // last evaluated operand is 0
= 0

> 'foo' && 0  // last evaluated operand is 0
= 0

> 3 || 'foo'  // last evaluated operand is 3
= 3

> 'foo' || 3  // last evaluated operand is 'foo'
= 'foo'

> 0 || 'foo'  // last evaluated operand is 'foo'
= 'foo'

> 'foo' || 0  // last evaluated operand is 'foo'
= 'foo'

> '' || 0     // last evaluated operand is 0
= 0
```

**Operator Precedence**
<p>JavaScript has a set of precedence rules it uses to evaluate expressions that use multiple operators and sub-expressions. 
<br>The following is a list of the comparison operations from the highest precedence (top) to lowest (bottom). 
*<=, <, >, >=
*==, !=
*&&
*||
</p>

**The Ternary Operator**
<p>The ternary operator is a quick and easy way to write a short, concise, and simple if/else conditional. It uses a combination of the ? and : symbols and takes 3 operands.
</p>

```
> 1 == 1 ? 'this is true' : 'this is not true'
= 'this is true'

> 1 == 0 ? "this is true" : "this is not true"
= 'this is not true'
 ```
 
 <p>The entire ternary operator is an expression. We can treat the ternary expression as a value: we can assign it to a variable, pass it as an argument, and so on.

 </p>
 
 ```
> let message = true ? 'this is true' : 'this is not true'
= undefined

> message
= 'this is true'

> console.log(false ? 'this is true' : 'this is not true')
this is not true
= undefined
```

**Switch Statement**
<p>The last conditional flow structure we want to discuss is the switch statement. A switch statement is similar to an if statement but it has a different interface.
<br> It compares a single value against multiple values for strict equality, whereas if can test multiple expressions with any condition.
<br>Switch statements use the reserved words switch, case, default and break.
</p>

```
let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break;
}

// logs "a is 5" to the console
```

<p>The switch statement evaluates the expression, compares its value to the value in each case clause and then executes the statements associated with the first matching clause.
<br>The statements in the default: clause run when the expression doesn't match any of the case clauses; it acts like the final else in an if statement.
<br>The break statement in each case is crucial. Without a break, execution "falls through" to the next case clause.
</p>

**Exercises**
<p>evenOrOdd:
</p>

```
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
```