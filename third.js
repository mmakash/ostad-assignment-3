// 3)javascript Spread Operator
function mergedArr(arr1,arr2){
    return [...arr1,...arr2];
}
const arr1 = [2,4,6,7];
const arr2 = [9,10,11];
console.log(mergedArr(arr1,arr2));