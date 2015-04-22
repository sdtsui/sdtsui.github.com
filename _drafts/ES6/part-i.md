Came from Q&A.

JSJabber, Adventures in Angular

1995 SPAs...quirks in the DOM.

Browser wars...
Netscape guys start firefox...

ES3.1 vs ES4...ES3.1 wins.
Called ES5. Called Harmony.

ES6 - Harmony...working title. 


Strawmannning: What they're considering implementing. For example: Object.observe()
 esdiscuss.org

 ES6 Twitter




 Dave Herman, Principal Research w/ Mozilla

 Proper tail recursion is a property of the asymptotic space complexity of a languagae's runtime behaviour...blahblahblah

 In Improperly Tail Recursive Languages...memory usage increases.
 Proper Tail call: constant memory usage. Drops the stack...

 Previous stacks GC'd or reused.

 Tail Position: Last instruction to fire before the return statement.

Proper tail call definition:
    -doesn't need variables in the current call's scope...
    -Last instruction is a call to another function
    -tail position: pointing at string
    -BAD: return 1+bar(), needs to return to the current stack ; NOT a tail call; a close call

 Close call: return 1+boo();

 Proper tail calls only work in strict mode
 optimize code so that tail position is a tail call...pass it everything it needs


 ES5 example: need a try catch to do fibonacci...
 With ES6...JUST WORKS.

 fib(n) + fib(n-1) is NOT A TAIL CALL; 
    -Traceur can't do it.



__________________
CONST, LET, and Blocks

Why hoisting: forgiving, like semicolons.
Still need variable hoisting...


var inside the {} if, hoisted anytime you're inside global or function...no matter how deep you are. Gonna hoist to the top.

Pre ES6: Javascript is function-scoped.
    -alawys hoists to top of funciton...
ES6: 

**Note: advanced Js course on frontend masters...deep into compiler stuff**


Crockford: Hoist all your variables.

Let --- traps inside if scope. BLOCK SCOPING AGAIN. Runs like you think it'll run.
    -Can't double-declare a variable with let.
    -Can't var->Let. Only for new variables.
    -Curly braces are NEW SCOPE.


Temporal Dead Zone:
    -now throwing an error.....
    let a = 1 .... space in memory is reserved.
        -current implementations don't respect TDZ...SHOULD throws referenceerror, firefox currently doesn't...

"If you are starting a new project...sasquatch. Do it. Reads easier."
"If you don't have to support legacy browsers...or a node developer."


when you exit for loops...declared with let, the let'd i doesn't get hoisted, will referenceError
    -functions same in IIFE

______________________


CONST  - simple
-don't assign again. 
-Lexically scoped inside the curly braces (ie, lexically scoped: only within the block)

Can do block functions...like if(true){}, same as [{} now...
works just like let.
can assign a function to a constant...don't wanna fuck with the prototype...



___________
Rest parameters:

...can load into arrays.
Basically the arguments object.


-One per function
-Must be last param...obv. ambiguity
-No default values fn(...[1,2,3])
-Can't use arguments (or i'll punch you in the neck)

__________
More on let:

Grunt-traceur can take your back to the original source.

Temporal dead zone: let b, all space before the let statement has B throwing errors.


_________
SPREADOPERATOR:

log(...nums); logs 1,2,3

You can spread out a certain number of things

returnTwo(...moreThanTwoThings)

Use cases:
-new arrays [...arr1, ...arr2]
-Spread out the results of a method call...


______________


Destructuring...
-new syntax
-pattern matching 

"I don't think it's gonna change but it could"

use case: Pull apart arrays...


"descructuring pattern"
{city: c, state: s, zip:z} = getAddress();

zip needs to exist..getting aliased to z.

Pulling apart input objects..omfg.



Oh shit...just throw it into the method sig with a destruct

function displayPerson({name, age})(
)

Most readable, most maintainable..

oh shit, default values:

function displayPerson({name = 'bob', age=0})

Remember: 
{}, MUST get right side object, with the RIGHT NAMES.
Irrefutable pattern.


Nested?


OH SHIT: There are REFUTABLE PATTERNS TOO:
var person = {name: "aaron", age: 35};
let {name, age, ?address} = person;

**Can make as much as you want refutable**

let ?{name, age, address} = person;
---undfeined..
---different from undeclared...

let {name, age, address:{city, state, zip}} = person

-no address, just c/s/z

can alias: city:c
OMG ALIASING...

NO * PATTERN. != {*}


________________
Destructuring arrays

var [one, two,,,,,,,,other] = nums
log(one, two, other) ; //1,2,10...


Swapping vars:

[b,a ] = [a,b] !!
cool, not practical?



function([first, second...others])

skip skip

Pulling out of a nested array...fk..
[one,,[three,,,,[six]]];; Jesus. pull stuff out. skip/deconstruct..




Pattern assignemnt:
[varname1] = [2,3] 
or
{'0' : 4}
or
{1,2}

it's good...

Could refute the whole patttern:
?{x,y,z} = {1,2}



Desstructuring is mostly just a sugar..



