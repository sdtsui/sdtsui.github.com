
function *genFunc(x,y){
  console.log("inside, yeilding undefined");
  var firstYieldResult = yield 'example';
  console.log('firstYield Result:', firstYieldResult);

  return 'last value';
  //this can be yield, to use 3rd, or return

}

var i = genFunc(2,3);
console.log('called constructor');
var firstYieldMsg = i.next();
console.log("first yield msg: ", firstYieldMsg);
console.log('nextcalleding');

var secondYieldMsg = i.next('send more data');
console.log('2ndY :', secondYieldMsg);

console.log("3rd :", i.next());