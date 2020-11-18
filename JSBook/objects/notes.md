<p>Objects store a collection of key-value pairs: each item in the collection has a name that we call the key and an associated value. Contrast this with arrays, which associate values with ordered indexes. Other languages have similar key-value data structures, but they may use different names like dictionaries, associative arrays, maps, and hashes. Some developers may even use these terms regarding JavaScript objects, but it's better to use the correct name: objects.
<br>An object's keys are strings, but the values can be any type, including other objects. We can create an object using object literal syntax:
<br>You can also write this on a single line.
</p>

```
let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};
```

<p>This code shows an object named person that has 3 key-value pairs:
<br>The name of the person, a string, defined by the name key.
<br>The age of the person, a number, defined by the age key.
<br>A list of the person's hobbies, an array of strings, defined by the hobbies key.
</p>


<p>Braces ({}) delimit the list of key-value pairs contained by the object. Each key-value pair ends with a comma (,), and each pair has a key, a colon (:), and a value. The comma that follows the last pair is optional. Though the keys are strings, we typically omit the quotes when the key consists entirely of alphanumeric characters and underscores. The values of each pair can be any type.
</p>

<p>We can access a specific value in an object in two ways: 1) dot notation and 2) bracket notation.
</p>

```
// dot notation
> person.name
= 'Jane'

// bracket notation
> person['age']
= 37
```

<p>With dot notation, we place a dot (.) and a key name after the variable that references the object. With bracket notation, we write the key as a quoted string and put it inside square brackets. Most developers prefer dot notation when they can use it. However, if you have a variable that contains a key's name, you must use bracket notation:
</p>

```
> let key = 'name'
> person[key]
```

<p>Suppose you want to remove something from an existing object? You can use the delete keyword:
</p>

```
> delete person.age
= true

> delete person['gender']
= true

> delete person['hobbies']
= true

> person
= { name: 'Jane', height: '5 ft' }
```

<p>delete removes the key-value pair from the object and returns true unless it cannot delete the property (for instance, if the property is non-configurable).
</p>

<p>Key-value pairs are also called object properties in JavaScript. We can also use "property" to refer to the key name; the meaning is typically clear from context. For instance, we can talk about the name property for the person object without mentioning the value.
</p>

<p>Note that objects declared with const are similar to const arrays; you can't change what object a const references, but you can modify its properties:
</p>

```
> const MyObj = { foo: "bar", qux: "xyz" }
> MyObj.qux = "hey there"
> MyObj
= { foo: 'bar', qux: 'hey there' }

> MyObj = {} // Uncaught TypeError: Assignment to constant variable.
```

<p>As with arrays, this behavior can be confusing, and it occurs because of the same "variables are pointers" concept that we'll discuss in the next chapter. Essentially, a const declaration prohibits changing what thing the const points to, but it does not prohibit changing the content of that thing. Thus, we can change a property in a const object, but we can't change which object the const points to.
</p>

<p>You can use Object.freeze with objects to freeze the property values of an object, just like you can with arrays:
</p>

```
> const MyObj = Object.freeze({ foo: "bar", qux: "xyz" })
> MyObj.qux = "hey there"
> MyObj
= { foo: 'bar', qux: 'xyz' }
```

<p>As with arrays, Object.freeze only works one level deep in the object. If your object contains nested arrays or other objects, the values inside them can still be changed unless they are also frozen.
</p>

**Objects vs Primitives**

<p>You may remember that JavaScript has two categories of data types: primitives and objects. The primitive types are strings, numbers, booleans, null, and undefined. Primitive types are the simplest, most basic types in JavaScript.
</p>

<p>Objects include, but aren't limited to, the following types:
<br>Simple Objects
<br>Arrays
<br>Date Objects
<br>Functions
</p>

<p>Objects are complex values composed of primitive values or other objects. For example, an array object (remember: arrays are objects) has a length property that contains a number: a primitive value. The critical thing to note is that we can change parts of an object, which means that objects are mutable.
</p>

<p>Primitive values are immutable; they don't have parts that one can change. Such values are said to be atomic; they're indivisible. If a variable contains a primitive value, all you can do to that variable is use it in an expression or reassign it: give it an entirely new value. All operations on primitive values evaluate as new values. Even something like 0 + 0 evaluates to a new value of 0.
</p>

```
> let number = 20
> let newNumber = number + 1
> newNumber
= 21

> number
= 20

> let object = { a: 1, b: 2, c: 3 }
> object.c = object.c + 1
= 4

> object
= { a: 1, b: 2, c: 4 }
```

<p>The above example illustrates the difference between a primitive value and an object. The + operation on line 2 returns a new value (21), and assigns it to newNumber; the original value of number (20), remains unchanged. In contrast, writing a new value to the object's c property on line 10 changes the object's value. Note, however, that the c property has an entirely new number in it, precisely like what happened on line 2.
</p>

**Prototypes**
<p>An interesting and handy feature of JavaScript objects is that they can inherit from other objects. When an object a inherits from object b, we say that b is the prototype of a. The practical implication is that a now has access to properties defined on b even though it doesn't define those properties itself.
</p>

<p>All you need to know right now is that inheritance lets one object use the properties defined by another object and that prototypes implement inheritance in JavaScript.
</p>

<p>The static method Object.create provides a simple way to create a new object that inherits from an existing object:
</p>

```
let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // logs 'Bob'
```

<p>Object.create creates a new object and sets the prototype for that object to the object passed in as an argument. Our example creates a new object named studentBob that uses bob as its prototype. That is, it creates an inheritance relationship from studentBob, the child object, to bob, the parent object.
</p>

**Iteration**

<p>Since most objects have multiple properties, you may want to iterate over an object's keys, values, or both. There are several ways to perform these operations in JavaScript.
</p>

<p>The for/in loop
<br>The for/in loop behaves similarly to an ordinary for loop. The syntax and semantics are easier to understand since you don't need an initializer, ending condition, or increment clause. Instead, the loop iterates over all the keys in the object. In each iteration, it assigns the key to a variable which you then use to access the object's values. As always, seeing a concept in action is helpful:
</p>

```
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}

// Bob
// 30
// 6 ft
```

<p>In the above example, we iterate over the person object using the for/in loop. Line 7 declares a variable prop which, in each iteration, receives a key from the object until the object runs out of key-value pairs. We use prop inside the loop body to access and log the corresponding value.
</p>

<p>One feature—or downside, depending on how you look at it—of for/in is that it iterates over the properties of an object's prototypes as well:
</p>

```
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}

// 1
// 2
// 3
// 4
```

<p>This behavior is undesirable when you want to limit iteration to an object's own properties, i.e., properties it defined for itself, not properties it inherited. We can use the hasOwnProperty method to get around that problem. It takes the name of a property and returns true if it is the name of one of the calling object's own properties, false if it is not.
</p>

```
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
}

// 3
// 4
```

**Object.keys**
<p>The Object.keys static method returns an object's keys as an array. You can iterate over that array using any technique that works for arrays. For instance:
</p>

```
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

let personKeys = Object.keys(person); // returns ['name', 'age', 'height']

personKeys.forEach(key => console.log(person[key]));
// Bob
// 30
// 6 ft
```

<p>Note that Object.keys returns the object's own keys: it does not include any keys from the prototype objects.
</p>

**Common Operations**
<p>Unlike JavaScript arrays (which, you may remember, are objects), most JavaScript objects don't have an abundance of methods that you can apply in your day to day usage. Most operations on objects involve iterating over the properties or their values. More often than not, you'll reach for methods that extract the keys or values of an object and then iterate over the resulting array. We saw an example of that when we used Object.keys to extract an object's keys as an array and then iterated over the array.
</p>

<p>Object.values
<br>This static method extracts the values from every own property in an object to an array:
</p>

```
let person = { name: 'Bob', age: 30, height: '6ft' };
let personValues = Object.values(person);
console.log(personValues); // logs [ 'Bob', 30, '6ft' ]
```

<p>Be careful: remember that you can't predict the order of the values in the returned array.
</p>

<p>Object.entries
<br>While Object.keys and Object.values return the keys and values of an object, respectively, the Object.entries static method returns an array of nested arrays. Each nested array has two elements: one of the object's keys and its corresponding value:
</p>

```
let person = { name: 'Bob', age: 30, height: '6ft' };
console.log(Object.entries(person));
// logs [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]
```

<p>Object.assign
<br>You may sometimes want to merge two or more objects, i.e., combine the key-value pairs into a single object. The Object.assign static method provides this functionality:
</p>

```
> let objA = { a: 'foo' }
= undefined

> let objB = { b: 'bar' }
= undefined

> Object.assign(objA, objB)
= { a: 'foo', b: 'bar' }
```

<p>Object.assign mutates the first object. In the above example, the properties from the b object get added to the a object, altering it permanently in the process:
</p>

```
> objA
= { a: 'foo', b: 'bar' }

> objB
= { b: 'bar' }
```

<p>When you need to choose between an object or an array to store some data, ask yourself a few questions:
<br>Do the individual values have names or labels? If yes, use an object. If the data doesn't have a natural label, an array should suffice.
<br>Does order matter? If yes, use an array.
<br>Do I need a stack or queue structure? Arrays are good at mimicking simple "last-in-first-out" stacks and "first-in-first-out" queues.

</p>
