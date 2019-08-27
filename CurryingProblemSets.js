let CONSTANT = 5;
function sum(...args) {
    return args.reduce((result, item) => {
        return result + item;
    });
}
function magic(fn) {
    let params = [];
    return function magicEx(...args) {
        let context = this;
        if (params.length + args.length < CONSTANT) {
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
    Define the CONSTANT value first
    let sumMagic = magic(sum);
    sumMagic(1)(6)(3)(4)(6)
    sumMagic(1)(6)(3)(4,6)
    sumMagic(1)(6,3)(4,6)
*/
