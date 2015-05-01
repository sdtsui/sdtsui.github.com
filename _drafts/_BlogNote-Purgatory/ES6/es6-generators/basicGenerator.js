// Node 0.11.2+ required
// IOJS
function * generatorFunction(x, y) {
    // Do something awesome
    console.log('Generator function executing');

    // Need more info
    console.log('Yielding undefined');
    var firstYieldResult = yield 'example'; // Pause (pseudo-return)
    console.log('First yield result: ', firstYieldResult);

    return 'last value';
}

var i = generatorFunction(2, 3);
var firstYieldMsg = i.next(); // Pseudo-return value { value: undefined, done: false }
console.log('First yield msg: ', firstYieldMsg);

var secondYieldMsg = i.next('send more data');
console.log('Second yield msg: ', secondYieldMsg);