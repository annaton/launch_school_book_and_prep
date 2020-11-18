<p>What is an array?
<br>An array is an ordered list of elements; each element has a value of any type. 
<br>You can define an array by placing a list of values between brackets ( [] ):
</p>

```
> let myArray = [2, 'Pete', 2.99, 'another string']
```

<p>The above example demonstrates that arrays are heterogeneous; myArray has both number and string values.
<br> Arrays can have anything in them, including objects and even other arrays.
<br>Each element in an array has a unique index number that gives the position of the element in the array. Thus we can say that arrays are indexed lists as well as ordered lists.
<br>You can refer to any element of an array by its index number. The syntax puts the index number between brackets after the array's name or value.
</p>

```
> myArray[0]
= 2
```

<p>The first element of an array is always at index 0.
<br>How can you easily access the last element?
</p>

```
> myArray[myArray.length - 1]
= 'another string'
```

**Modifying Arrays**
<p>To replace an element of an array, use brackets with the assignment operator:
</p>

```
> let array = [1, 2, 3]
> array[1] = 4
= 4

> array
= [ 1, 4, 3 ]
```

<p>You can also use [] to add new elements to an array:
</p>

```
> array[array.length] = 10
= 10

> array
= [ 1, 4, 3, 10 ]
```
<p>Note that arrays declared with const are a little strange; while you can't change what array a const references, you can modify the array's content
</p>

```
> const MyArray = [1, 2, 3]
> MyArray[1] = 5
> MyArray
= [1, 5, 3]

> MyArray = [4, 5, 6] // Uncaught TypeError: Assignment to constant variable.
```

<p>Essentially, a const declaration prohibits changing what thing the const points to, but it does not prohibit changing the content of that thing. Thus, we can change an element in a const array, but we can't change which array the const points to.
<br>If you want the elements of the array to also be const, you can use the Object.freeze method:
</p>

```
> const MyArray = Object.freeze([1, 2, 3])
> MyArray[1] = 5
> MyArray
= [1, 2, 3]
```

**Adding elements with push**
<p>The push method adds one or more elements to the end of an array:
<br>push appends its arguments to the caller (the array): it mutates the coller. It returns the array's new length.
<br>Remember that functions and methods can perform an action and return something different.
</p>

```
> array.push('a')
= 5               // the new length of the array

> array
= [ 1, 4, 3, 10, 'a' ]

> array.push(null, 'xyz')
= 7

> array
= [ 1, 4, 3, 10, 'a', null, 'xyz' ]
```

**Adding elements with concat**
<p>
The concat method is similar to push, but it doesn't mutate the caller; it returns a brand new array that contains all the elements from the original array followed by the elements passed as arguments:
</p>

```
> array.concat(42, 'abc')
= [ 1, 4, 3, 10, 'a', null, 'xyz', 42, 'abc' ]

> array
= [ 1, 4, 3, 10, 'a', null, 'xyz' ]
```

**Removing elements with pop**
<p>The inverse of push is pop. This method removes and returns the last element of the caller array:
<br>pop mutates the caller.
</p>

```
> array.pop()
= 'xyz'            // removed element value

> array
= [ 1, 4, 3, 10, 'a', null ]
```

**Removing elements with splice**
<p>The splice method lets you remove one or more elements from an array, even those that aren't at the end of the array:
<br>splice mutates the original array and returns a new array that contains the deleted elements.
</p>

```
> array.splice(3, 2)
[ 10, 'a' ]

> array
= [ 1, 4, 3, null ]
```

**Iteration Methods**
<p>Iterating with forEach
<br>JavaScript has a variety of built-in methods that iterate over the contents of an array. forEach provides a simple way to iterate over arrays: style guides often recommend it in favor of a for loop.
<br>To use forEach, you need a callback function that performs one or more actions on its argument, then pass that callback as an argument to forEach.
<br>A callback function is a function that you pass to another function as an argument. The called function subsequently invokes the callback function at certain times while it runs.
<br>forEach iterates over the elements in the array, and invokes the callback once for each element; it passes the element's value to the callback. 
<br>forEach always returns undefined.
</p>

```
let array = [1, 2, 3];
array.forEach(function (num) {
  console.log(num);
});
// returns undefined

// Outputs
1
2
3
```

<p>This code invokes the callback function once for each element in the array. forEach, during each iteration, invokes the callback with the element's value as an argument. 
<br>The callback then logs it to the console. In the end, forEach returns undefined.
<br>We can also use an array function instead of a function expression, which makes our code compact and more readable.
</p>

```
let array = [1, 2, 3];
array.forEach(num => console.log(num));
```

<p>We can also perform more complex operations:
</p>

```
let array = [1, 2, 3];
array.forEach(num => console.log(num + 2));

// Outputs
3
4
5
```

<p>Transforming Arrays with map
<br>forEach works well when you want to use the values of an array's elements. Suppose that you want to create a new array whose values depend on the original contents of the array.
<br>Suppose you want to create a new array that contains the squares of all the numbers in the calling array:
</p>

```
> let numbers = [1, 2, 3, 4]
> let squares = [];
> numbers.forEach(num => squares.push(num * num));
> squares
= [ 1, 4, 9, 16 ]

> numbers
= [ 1, 2, 3, 4 ]
```

<p>That works well enough, but the callback now has a side effect: it modifies the squares variable, which isn't part of the callback function.
<br>Side effects sometimes lead to trouble. Consider what happens if you ran the forEach call again after running the above code:
</p>

```
> numbers.forEach(num => squares.push(num * num));
> squares
= [ 1, 4, 9, 16, 1, 4, 9, 16 ]
```

<p>We now have two copies of the squares since we forgot to reset squares to an empty array.
<br>The map function handles this situation more cleanly:
</p>

```
> let numbers = [1, 2, 3, 4]
> let squares = numbers.map(num => num * num);
> squares
= [ 1, 4, 9, 16 ]

> squares = numbers.map(num => num * num);
= [ 1, 4, 9, 16 ]
```

<p>The first 4 lines of this code have the same result as the previous example using forEach.
<br>However, map returns a new array that contains one element for each element in numbers, with each element set to the return value of the callback: the squares of the numbers in this case. 
<br>This code is more compact than the forEach code and it has no side effects; the callback doesn't update squares (the return value of map does that), and we don't have to reset the variable if we rerun the same code.
<br>forEach and map are important methods, but they can confuse beginners. The main thing to remember is that forEach performs simple iteration and returns undefined, while map transforms an array's elements and returns a new array with the transformed values.
</p>

<p>Filtering arrays with filter
<br>The filter method is another array iteration method. It returns a new array that includes all elements from the calling array for which the callback returns a truthy value.
</p>

```
> let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
> numbers.filter(num => num > 4)
= [ 5, 6, 7, 8, 9, 10 ]

> numbers
= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]
```

<p>filter iterates over the elements of the array. During each iteration, it invokes the callback function, using the value of the current element as an argument. 
<br>If the callback returns a truthy value, filter appends the element's value to a new array. Otherwise, it ignores the element's value and does nothing.
<br>When filter finishes iterating, it returns the array of selected elements: the elements for which the callback returned a truthy value.
<br>filter doesn't mutate the caller.
</p>

<p>Building new values from arrays with reduce
<br>The reduce method is perhaps one of the hardest to understand, yet it is also one of the most fundamental.
<br>You can build forEach, map, and filter with reduce.
<br>reduce takes two arguments: a callback function and a value that initializes something called the accumulator. 
<br>The callback function takes two arguments as well: an element from the array, the current value of the accumulator.
<br>It returns a value that will be used as the accumlator in the next invocation of the callback.
</p>

```
> let arr = [2, 3, 5, 7]
> arr.reduce((accumulator, element) => accumulator + element, 0)
= 17

> arr.reduce((accumulator, element) => accumulator * element, 1)
= 210
```

<p>
The first of the invocations computes the sum of all the values in the array, e.g., 2 + 3 + 5 + 7. To get us started, we initialize the accumulator to 0. Thus, on the first invocation of the callback function, accumulator is 0 and element is 2. The callback returns 2, which becomes the new accumulator value when we invoke the callback again, this time with the element 3. That invocation, in turn, returns 5. This process continues until the final return value is 17.
<br>The second invocation of reduce computes the product of the numbers in the array (2 * 3 * 5 * 7), starting out with 1 as the accumulator. (If we started with 0 as the accumulator, the final return value would be 0 since 0 times anything is 0.)
<br>The reduce function isn't limited to working with numbers: you can also use it with strings, objects, arrays: anything. Here's an example with strings:
</p>

```
> let strings = ['a', 'b', 'c', 'd']
> strings.reduce((accumulator, element) => {
...   return accumulator + element.toUpperCase()
... }, '');
= 'ABCD'
```

<p>reduce does not mutate the caller.
</p>

<p>Arrays can be odd
<br>You've already met one oddity: indexes start at 0. Most programming languages use zero-based indexes, so it's not too odd. However, learners often stumble on this aspect of using arrays.
<br>The length property always returns a number that is one greater than the greatest used index position of the array. For instance, if an element exists at index position 124 and there are no other elements with greater index values, then the array's length is 125.
<br>Arrays are Objects. 
</p>

```
> let arr = [1, 2, 3]
> typeof a                  // returns 'object'
```

<p>If you really need to detect whether a variable references an array, you need to use Array.isArray instead:
</p>

```
> let arr = [1, 2, 3]
> Array.isArray(arr)       // returns true
```

<p>If you change an array's length property to a new, smaller value, the array gets truncated; JavaScript removes all elements beyond the new final element.
</p>

<p>If you change an array's length property to a new, larger value, the array expands to the new size. The new elements do not get initialized, which leads to some strange behavior:
</p>

```
> let arr = []
> arr.length = 3
> arr             // returns [ <3 empty items> ]
> arr[0]          // returns undefined
> arr.filter(element => element === undefined) // returns []
> arr.forEach(element => console.log(element)) // no output, but returns undefined
> arr[1] = 3
> arr             // returns [ <1 empty item>, 3, <1 empty item> ]
> arr.length      // 3
> arr.forEach(element => console.log(element)) // outputs 3
> Object.keys(arr) // ['1']
```

<p>In general, JavaScript treats unset array elements as missing, but the length property includes the unset elements.
</p>

<p>You can create array "elements" with indexes that use negative or non-integer values, or even non-numeric values:
</p>

```
> arr = [1, 2, 3]
= [ 1, 2, 3 ]

> arr[-3] = 4
= 4

> arr
= [ 1, 2, 3, '-3': 4 ]

> arr[3.1415] = 'pi'
= [ 1, 2, 3, '-3': 4, '3.1415': 'pi' ]

> arr["cat"] = 'Fluffy'
= 'Fluffy'

> arr
= [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
```

<p>These "elements" aren't true elements; they are properties on the array object, which we'll discuss later. Only index values (0, 1, 2, 3, and so on) count toward the length of the array.
</p>

<p>Since arrays are objects, you can use the Object.keys method to return an array's keys -- it's index values -- as an array of strings. Even negative and non-integer indexes are included.
</p>

```
> arr = [1, 2, 3]
> arr[-3] = 4
> arr[3.1415] = 'pi'
> arr["cat"] = 'Fluffy'
> arr
= [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]

> Object.keys(arr)
= [ '0', '1', '2', '-3', '3.1415', 'cat' ]
```

<p>One quirk of this method is that it treats unset values in arrays differently from those that merely have a value of undefined. Unset values are set to undefined by JavaScript as an after effect of calling another method, while explicit undefined are ones that are purposely set in an array.
</p>

```// unset values
let a = new Array(3);
let b = [];
b.length = 3;

// undefined
let c = [undefined, undefined, undefined]

a;                      // [ <3 empty items> ]
b;                      // [ <3 empty items> ]
c;                      // [ undefined, undefined, undefined ]

a[0] === undefined;     // true
b[0] === undefined;     // true
```

<p>While the length property of Array includes undefined in the count regardless of how it got set, Object.keys only counts those that were set explicitly.
</p>

```
a.length;                //  3
b.length;                //  3
c.length;                //  3

Object.keys(a).length;   //  0
Object.keys(b).length;   //  0
Object.keys(c).length;   //  3
```

**Nested Arrays**
<p>Array elements can contain anything, including other arrays: you can create arrays with arrays inside of them, and even arrays inside those inner arrays. Let's say that you want to track all of the teams playing in a mixed doubles tennis tournament. You might create an array like this.
</p>

```
> let teams = [['Joe', 'Jennifer'], ['Frank', 'Molly'], ['Dan', 'Sarah']]
```

<p>If you want to retrieve the second element of teams[2], you can append [1] to the expression:
</p>

```
> teams[2][1]
= 'Sarah'
```

**Array Equality**

```
> [1, 2, 3] === [1, 2, 3]
= false
```

<p>At first glance, you might say that the arrays in the first example are also "the same array," but they're not. They're two different arrays that happen to have the same values. However, they occupy distinct positions in memory, so they aren't the same array, and thus aren't equal.
</p>

```
> let a = [1, 2, 3]
> let b = a
> a === b
= true
```

<p>JavaScript treats two arrays as equal when they are the same array: they must occupy the same spot in memory. This rule holds for JavaScript objects in general; objects must be the same object. For this reason, the second example returns true while the first one returns false. Assigning a to b makes b refer to the same array as a; it doesn't create a new array.
</p>

<p>How do you check whether two arrays have the same elements? One option is to create a function that compares the elements of one array with the corresponding elements in the other:
</p>

```
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // logs true
console.log(arraysEqual([1, 2, 3], [4, 5, 6])); // logs false
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4])); // logs false
```

<p>arraysEqual works best when all elements in both arrays have primitive values. If even one pair of elements contains an array or other object, arraysEqual may not return the correct result.
</p>

**Other Array Methods**

<p>The includes method determines whether an array includes a given element:
</p>

```
> let a = [1, 2, 3, 4, 5]
> a.includes(2)
= true

> a.includes(10)
= false
```

<p>The sort method is a handy way to rearrange the elements of an array in sequence. It returns a sorted array.
<br>sort mutates the caller.
</p>

```
> let a = [5, 3, 8, 2, 4, 1]
> a.sort()
= [ 1, 2, 3, 4, 5, 8 ]
```

<p>The slice method—not the splice method you met earlier—extracts and returns a portion of the array. It takes two optional arguments. The first is the index at which extraction begins, while the second is where extraction ends:
</p>

```
> let fruits = ['mango', 'orange', 'banana', 'pear', 'apple']
> fruits.slice(1, 3)
= [ 'orange', 'banana' ]

> fruits.slice(2) // second argument defaults to rest of array
= [ 'banana', 'pear', 'apple' ]

> fruits.slice() // no arguments duplicates the array
= [ 'mango', 'orange', 'banana', 'pear', 'apple' ]
```

<p>The reverse method reverses the order of an array.
</p>

```
> let numbers = [1, 2, 3, 4]
> numbers.reverse()
= [ 4, 3, 2, 1 ]

> numbers
= [ 4, 3, 2, 1 ]
```

<p>reverse is destructive: it mutates the array. As mentioned in the previous section, you can use slice with no arguments if you don't want to mutate the original array:
</p>

```
> let numbers = [1, 2, 3, 4]
> let reversedNumbers = numbers.slice().reverse()
> reversedNumbers
= [ 4, 3, 2, 1 ]

> numbers
= [ 1, 2, 3, 4 ]
```

**Exercises**

<p>Exercise 1
<br>What is the length of each array?
</p>

```
let array2 = [1];
array2.length = 5;
```

<p>The length of array2 is 5. You can set the length of an array. Even if the highest index position that has a value assigned is 0, assigning a new length of 5 overrides that length and adds some elements with a value of undefined to fill the gap.
</p>

```
let array3 = [];
array3[-1] = [1];
```

<p>The length of array3 is 0. Index positions must be non-negative integers starting from 0. Negative and non-integer indexes don't get taken into account when determining an array's length.
</p>

```
let array5 = [];
array5[100] = 3;
```

<p>The length of array5 is 101. As already noted, the length is the highest index position that has a value, plus 1. In this case, the highest index position that has a value is 100, so the length is 101.
</p>

<p>Log all of the even values from myArray to the console.
</p>

```
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
```

<p>Solution
</p>

```
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value); // => 6, 4, 2, 4, 16, 0
  }
}
```