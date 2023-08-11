// 5) javascript es6 map
function doubleNumber(numbers){
    const result = numbers.map(number => number * 2);
    return result;
}
const numbers = [2,4,6,8];
console.log(doubleNumber(numbers));