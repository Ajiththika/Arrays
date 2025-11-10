//length
const a = [1,2,3];
console.log(a.length); // 3
a.length = 2;
console.log(a); // [1,2]
a.length = 5;
console.log(a); // [1,2, <3 empty slots>]  // sparse

//Array.of()
Array.of(3); // [3]
Array(3);   // creates array with length 3 and no elements (sparse)

//Array.from()
Array.from('hey'); // ['h','e','y']
Array.from([1,2,3], x => x * 2); // [2,4,6]
Array.from(new Set([1,2,3])); // [1,2,3]

//Array.isArray()



