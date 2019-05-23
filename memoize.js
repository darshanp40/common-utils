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