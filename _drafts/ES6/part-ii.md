
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


________________

// Options: --annotations --array-comprehension --async-functions --async-generators --exponentiation --export-from-extended --for-on --generator-comprehension --member-variables --proper-tail-calls --require --symbols --types 
var nums = [1,2,,,5];
nums.forEach((num=1000, index)=>{
  console.log(num,index);
});
console.log(nums);
console.log(nums[2]);
console.log('breaker');

will not log for mid indexes...

_____________________
Default parameters:
-write less code
-easier to read
-improved predictability


logMe(count=getCount()){}

Can have a die function...just throw errors and kill it when you don't pass right params...


Assignment happens lexically...

Question:
Why does this invoke work? "Assign with method call"
  function getRand(){
    return Math.ceil(Math.random() * 10000000) + new Date().getTime();
  }

  function myFunction(id=getRand()){
    console.log("My ID: "+id);
  }

  myFunction(); //Logs random number
  myFunction(1); //Logs 1


But this one doesn't, when I change out X to be a function?
"Assignment happens lexically"
var x = "INIT";

  function test(a = x) {
    var x;
    return a;
  }

  console.log( test() ); //undefined


Param gotchas...

"no paramaters with rest.""

(a=100, b=100, ...rest)
but NOT rest=100

"Default params do not show up in the arguments object"
args.length is still 0..."wizards that check incoming params vs the arguments object"

_____________________

Javaville:

"Horribleserviceimplementerserviceproxy..."
"Com.frontendmasters.service."...

You can extend built in functions and objects. I could make array.push return the array itself...
I can extend it and do my own stuff. 
Make something easy to read. 
worth being exciting about!

Goes back to ES4 days..churn, precedence...

cool email: mail.mozilla.org/pipermail/es-discuss/2012-March/thread.html#21430

Brendan Eich
Russell Leggett
Allen Wirfs-Brock
David Herman
Claus Reinke

CLASSES:

-constructor pattern

Private properties: Put in closure...
for Private properties!!
---don't use with NEW!

const monsterHealth = Symbol();
const monsterSpeed = Symbol();
//or use var...

//....
  class Monster{
    constructor(name, health, speed){
      this.name = name;
      this[monsterHealth] = health;
      this[monsterSpeed]= speed;
    }
    //...
    get speed(){
      return this[monsterSpeed];
    }
    //...
    set health(val){
      if(val < 0){
        throw new Error('Health must be positive number');
      }
      this[monsterHealth] = val;
    }
  }


  private property:


Symbol constructor: 
for now
thing of it as a 
a generator that never will give the same one twice...


Basically, now people can't fuck with the internal property.

get isAlive
attack

possible
alertwhenDead, returns a promise...


Gitcha:
this.name

calls
set name(){
  this.name = name;
}
_________
(still obv not a new thing: just sugar)
extending superclass:
 class Monster{
    constructor(name, health){
      this.name = name;
      this[monsterHealth] = health;
    }
    //....
  }
  class Godzilla extends Monster{
    constructor(){
      super('Godzilla', 10000);
    }
  }



No root level code, can't put const inside the class specification.
 needs to be in a method (like constructor)


_________
super, superclass methods...still subject to change.

classes do not hoist.


_________
Benefits of Classes:


Sugar
Easier to learn #noobs
Subclassing easier to learn #noobs
Subclass built in object: Array, Error, etc
Code more portable between JS Frameworks
Possible Perf Gains

Exercise: so you can chain arrays.
array.push() returns the array.


__________


Set([1,2,3,4,5]);
es6: can iterate through all of the items.


MAP:
Basic map, like a json object.
No typecasing.
Can use complex objects, functions, primitives as a key..!
  -key is defined by in-memory...
size. map.entries() returns an iterator...


custom hash functions:
---not built into the framework


Weakmap:
-only has a weakreference...
-reference inside of weakmap doesn't prevent garbage collection...

_____________
Modules:
Hard To Discuss
Not any great support right now
Polyfills only
Still Fresh
Least amount of Tooling

Modules General:
Hard To Discuss
Not any great support right now
Polyfills only
Still Fresh
Least amount of Tooling

Similarities:
Bits of CommonJS & AMD
Similar To CommonJS
Single Exports
Cyclic Dependencies
Similar To AMD
Async Loading Support
Configurable Module Loading


______________

PROMISES:

//Made My Own GET method

  function get(url){
    return new Promise(function(resolve, reject){
      $.get(url, function(data){
        resolve(data);
      })
      .fail(function(){
        reject();
      });
    });
  }


  _________________

  Promise.all(iterable); //Wait Until All Settle
  Promise.race(iterable);//Wait Until 1 Settles
  Promise.reject(reason);//Create a promise that is already rejected
  Promise.resolve(value);//Create a promise that is already resolved


  ________________
  Yield is "pause and send this value back"

  a generator function, upon invokation, returns a GENERATOR ITERATOR

// Options: --annotations --array-comprehension --async-functions --async-generators --exponentiation --export-from-extended --for-on --generator-comprehension --member-variables --proper-tail-calls --require --symbols --types 
function *foo(x) {
    var y1 = yield (x+1);
    var y = 2 * (y1);
    var z = yield (y / 3);
    return (x + y + z);
  }

  var genit = foo( 5);

  console.log( genit.next() );       // { value:6, done:false }
  console.log( genit.next( 12,99 ) );   // { value:8, done:false }
  console.log( genit.next( 13 ) );   // { value:42, done:true }// Options: --annotations --array-comprehension --async-functions --async-generators --exponentiation --export-from-extended --for-on --generator-comprehension --member-variables --proper-tail-calls --require --symbols --types 
function *foo(x) {
    var y1 = yield (x+1);
    var y = 2 * (y1);
    var z = yield (y / 3);
    return (x + y + z);
  }

  var genit = foo( 5);

  console.log( genit.next() );       // { value:6, done:false }
  console.log( genit.next( 12,99 ) );   // { value:8, done:false } ***Remember, that 12 gets PASSED INTO the yield. And it can take only one value...
  console.log( genit.next( 13 ) );   // { value:42, done:true }
  _____________
  Traceur build tools, source maps, etc


  _______________

  Wrap ups:

  Classses.
  benefits in Angular...


________________
_______________

Array Destructuring final:


var nums = [1, 2, [3, 4, [5, 6]]];

var [one,,[three,,[,six]]] = nums;


one = 1
three = 3
six = 6

allows you to take things out of an array really quickly/cleanly, instead of 
wrapping them with individual lines...