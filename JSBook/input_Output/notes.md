<p>Using readline-sync to greet the user by names

</p>

```
let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);
```

<p>This program displays a question, then waits for your input. When you enter a name and hit Return, the program displays a custom greeting message:

</p>

```
$ node personalized_greeting.js
What's your name?
Sarah
Good Morning, Sarah!
```

<p>You can also use rlSync for adding numbers that are input by the user.
</p>