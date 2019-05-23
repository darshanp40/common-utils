/* 
@function: Create an array of values of a particular key presnt in array of Objects
@parameter: arrObj: Array of objects
@parameter: key: the key in object whose values need to be in the result array
*/
export const createArrayKeys = (arrObj, key) => {
    return arrObj.map(item => item[key]);
}