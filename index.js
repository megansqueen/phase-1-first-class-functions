function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log(`this is a names function`)
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log(`you can do it!`)
    }
}