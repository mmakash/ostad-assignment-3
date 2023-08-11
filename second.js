// 2) javascript function returns
function findMaxNumber(numbers) {
    if (numbers.length === 0) {
      return null;
    }
  
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  
  // Test the findMaxNumber function
  const array1 = [5, 8, 2, 10, 3];
  console.log(findMaxNumber(array1)); // Output: 10
  
  const emptyArray = [];
  console.log(findMaxNumber(emptyArray)); // Output: null
  