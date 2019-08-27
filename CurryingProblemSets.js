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
