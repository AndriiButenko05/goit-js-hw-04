'use strict';
function isEnoughCapacity(products, containerSize){
    const size = Object.values(products);
    let sum = 0;
    for (let i = 0; i < size.length; i++) { 
        sum += size[i];
    }
    if (sum <= containerSize) {
        return true;
    } else {
        return false;
    }
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false
