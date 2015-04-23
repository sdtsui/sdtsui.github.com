/*
http://davidwalsh.name/es6-generators
http://davidwalsh.name/async-generators
preemptive vs cooperative
first next call doesn't take a parameter
using a return not recommended (for...of loops)
calling a generator creates an iterator (no code executed)
*/

function * x(val) {
    console.log('Value: ', val);
    console.log('First yield: ', yield 'hello');
    console.log('Last yield: ', yield 'goodbye');
    return 'go away!';
};

function basicFunction(param1, param2) {
    var singleReturnValue = param1 + param2;

    return singleReturnValue;
}

var i = x();
console.log(i.next('nick'));
console.log(i.next('spidy'));
console.log(i.next('ferraro'));
console.log(i.next('test'));

for(var v of x()) {
    console.log(v);
}

function doAjaxWithCallback(url, cb) {
    var mockResponses = {
        'google.com': 'Welcome to Google',
        'microsoft.com': 'Blue Screen of Death'
    };

    setTimeout(function() {
        cb(mockResponses[url]);
    }, 100);
}

var cache = {};
function ajaxRequest(url) {
    if( cache.hasOwnProperty(url) ) {
        console.log('Using cache');
        setTimeout(function() {
            program.next(cache[url]);
        }, 0);
        return;
    }

    doAjaxWithCallback(url, function(data) {
        cache[url] = data;
        program.next(data);
    });
}

function * main() {
    var x = yield ajaxRequest('google.com');
    console.log('Google Response: ', x);

    var y = yield ajaxRequest('microsoft.com');
    console.log('Microsoft Response: ', y);

    var z = yield ajaxRequest('google.com');
    console.log('Google\'s 2nd Response: ', z);
}

var program = main();
program.next(); // Returns object with value set to undefined (or whatever ajaxRequest('google.com') would return)