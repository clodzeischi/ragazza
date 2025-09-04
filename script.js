let array1 = ["apple", "banana", "Apple", "Orange", "aPricot", "orange"];
let array2 = [ 1, 5, 2, 4, 6, 2, 3, 5 ];


let sortedArray = (arr) => {
    if (!arr || !Array.isArray(arr)) {
        console.log("Array is not real");
    } else if (arr.length === 0) {
        console.log("Array is empty");
    } else {
        return arr.sort( (a, b) => a - b)
    }
}

console.log(sortedArray());