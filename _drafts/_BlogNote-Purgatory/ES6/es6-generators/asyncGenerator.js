var cache = {};
function ajaxRequest(url) {
    var fakeWeb = {
        'spidy': 'is the bestest',
        'genzume': 'is not so bestest'
    };

    if( cache.hasOwnProperty(url) ) {
        console.log('Cache is being used');

        setTimeout(function() {
            program.next(cache[url]);
        }, 0);
        // This would break the generator (it's already running)
        // program.next(cache[url]);
        // /////This is pretty clutch: puts the next, late in the event loop. Yield on line 31 can pause, before a blocking 'next' is called.
        //  **Be careful with generators...because you can't continue to call next. Need to put it back on the event queue.
        return;
    }

    // doAjax(url, cb)
    setTimeout(function() {
        // callback triggered
        cache[url] = fakeWeb[url];
        program.next( fakeWeb[url] );
    }, 1000);
}

function * main() {
    var spidy = yield ajaxRequest('spidy');
    console.log(spidy);
    var spidyAgain = yield ajaxRequest('spidy');
    console.log(spidyAgain);
}

var program = main();
program.next();