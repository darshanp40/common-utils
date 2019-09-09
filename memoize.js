/* 
@function: a memoizer function to cache results of a function
@argument: a function whose result should be memoized for a particular argument
*/
function memoize(func) {
    let cache = {};
    return function (arg) {
        if (cache[arg]) {
            return cache[arg];
        } else {
            let result = func(arg);
            cache[arg] = result;
            return result;
        }
    }
}


/**
 * Improved version of memoize
 * In this n number of parameters are supported to memoize
 * each memoize function maintain it's own cache
 * @param {function} - function to be memoized
 * @param {object} - context to be used for function to be memoized
 * @returns {function} memoized function
 */
function memoize(func, context) {
    const _cached = function (...arg) {
        return _memoize(...arg);
    }
    _cached.cache = {};
    const _memoize = function(...arg) {
        let args = [...arg].toString();
        if (_cached.cache[args]) {
            return _cached.cache[args];
        } else {
            let result = func.apply(context, arg);
            _cached.cache[args] = result;
            return result;
        }
    }
    return _cached;
}

// var myName = memoize(function(fname, lname) {
// 	return `hello ${fname} ${lname}`;
// })
// var yourName = memoize(function(fname, lname) {
// 	return `hello ${fname} ${lname}`;
// })


// console.log(myName("dharmendra", "patel"));
// console.log(myName("dharmendra", "patel"));
// console.log(myName.cache);
// console.log(myName("rahul", "singh"));
// console.log(myName("rahul", "singh"));
// console.log(myName.cache);

// console.log(yourName("amit", "sharma"));
// console.log(yourName("amit", "sharma"));
// console.log(yourName.cache);
// console.log(yourName("aman", "jagga"));
// console.log(yourName("aman", "jagga"));
// console.log(yourName.cache);
