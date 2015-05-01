
function * generatorFunction() {
    // next start
    yield '1'; // next
    yield '2'; // next
    yield '3'; // next
    return '4';
}

console.log('Starting for..of');
for( var k of generatorFunction() ) {
    console.log(k);
}