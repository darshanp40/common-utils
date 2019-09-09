function sum(...args) {
    return args.reduce((result, item) => {
        return result + item;
    });
}

function meSum(a,b,c) {return a+b+c};

function magic(fn, paramLength) {
    let params = [];
    paramLength = fn.length || paramLength;
    return function magicEx(...args) {
        let context = this;
        if (params.length + args.length < paramLength) {
            params = [ ...params, ...args ];
            return magicEx.bind(context);
        } else {
            let arg = [ ...params, ...args ];
            params = [];
            return fn.apply(context, arg);
        }
    };
}

/* 
    let sumMagic = magic(sum, 5);
    sumMagic(1)(6)(3)(4)(6)
    sumMagic(1)(6)(3)(4,6)
    sumMagic(1)(6,3)(4,6)
    
    let msumMagic = magic(meSum);
*/


/**
 * This is simple way of currying the function
 * @param { Function } f - function to be curried
 * @param { Number } l - Expected parameters length
 * @param { Object } c - function context
 */
const curry = function (f, l, c) {
	return function _magic(...args) {
		return args.length === (f.length || l) ? f.call(c, ...args) : _magic.bind(c, ...args);
	}
}

// Examples:
// const testCurry = curry((a, b, c, d) => a + b + c + d);
// testCurry(1)()()(2, 3)()()(4);

// let sumMagic = curry(sum, 5);
// sumMagic(1)(6)(3)(4)(6)
// sumMagic(1)(6)(3)(4,6)
// sumMagic(1)(6,3)(4,6)
