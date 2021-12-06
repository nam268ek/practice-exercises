// recursion sum array
function recursionSum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + recursionSum(arr.slice(1));
}

console.log(recursionSum([5, 9, 6, 8, 4, 6]));