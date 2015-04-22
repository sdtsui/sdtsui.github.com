
traceur repl:
https://google.github.io/traceur-compiler/demo/repl.html#
____________________
Arrow Functions

ES6: fat arrow functions

var fn2 = () => 2;
implicitly returns...until you wrap in a block scope {2}

lol, esoteric Parenthesis-Parameter Rules

one param, optional parens
must wrap with parents: multiple params, no params, 


Map Primer: associative array:  composed of collection of key,value pairs, each possible key apprears just once in collection
Add/insert
Reassign
Remove/Delete
Lookup


"You'd end up using fat arrow all the time"

Can't use arrow functions as a constructor.

This is bound lexically. can't rebind an arrow function, like .call(newThis);
You won't get an error, but it won't.

"potential long term benefit of having
"If you can get rid of constructors of every function...never new up my click handler...
    if constructors use only class syntax...might have a memory improvement"

    Fat arrow