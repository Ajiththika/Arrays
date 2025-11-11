//  WHAT IS AN ARRAY
let fruits = ["apple", "banana", "mango"];
console.log("Fruits:", fruits); 
console.log("First fruit:", fruits[0]); 
console.log("Second fruit:", fruits[1]); 

//  CREATING ARRAYS
console.log("\n--- Creating Arrays ---");
console.log(Array.of(1, 2, 3)); 
console.log(Array.from("hi")); 
console.log(Array.isArray(fruits)); 

//  ADDING / REMOVING ITEMS
console.log("\n--- Adding / Removing Items ---");
let numbers = [1, 2, 3];
numbers.push(4); // Add at end
console.log("push:", numbers); 

numbers.pop(); // Remove last
console.log("pop:", numbers); 

numbers.unshift(0); // Add at start
console.log("unshift:", numbers); 

numbers.shift(); // Remove first
console.log("shift:", numbers); 

numbers.splice(1, 1, "new"); 
console.log("splice:", numbers); 

let combined = [1, 2].concat([3, 4]);
console.log("concat:", combined); 

//  COPYING & MODIFYING
console.log("\n--- Copy & Modify ---");
let arr = [1, 2, 3, 4];
console.log("copyWithin:", arr.copyWithin(1, 2)); 
console.log("fill:", [1, 2, 3].fill(0)); 
console.log("slice:", [1, 2, 3, 4].slice(1, 3)); 

// ES2023 safe methods
console.log("toSpliced:", [1, 2, 3].toSpliced(1, 1)); 
console.log("with:", [1, 2, 3].with(1, 9)); 
//  SEARCHING
console.log("\n--- Searching ---");
let nums = [10, 20, 30, 40];
console.log("find:", nums.find(x => x > 15)); 
console.log("findIndex:", nums.findIndex(x => x > 15)); 
console.log("findLast:", nums.findLast(x => x > 15)); 
console.log("findLastIndex:", nums.findLastIndex(x => x > 15)); 
console.log("includes:", nums.includes(30)); 
console.log("indexOf:", nums.indexOf(20)); 
console.log("lastIndexOf:", [1, 2, 3, 2].lastIndexOf(2)); 
console.log("at:", nums.at(-1)); 

//  TRANSFORMING
console.log("\n--- Transforming ---");
let data = [1, 2, 3, 4];
console.log("map:", data.map(x => x * 2)); 
console.log("filter:", data.filter(x => x > 2)); 
console.log("reduce:", data.reduce((a, b) => a + b)); 
console.log("reduceRight:", data.reduceRight((a, b) => a - b));
console.log("flat:", [1, [2, [3]]].flat(2)); 
console.log("flatMap:", [1, 2, 3].flatMap(x => [x, x * 2])); 

//  CHECKING CONDITIONS
console.log("\n--- Checking Conditions ---");
console.log("every:", [2, 4, 6].every(x => x % 2 === 0)); 
console.log("some:", [1, 3, 4].some(x => x % 2 === 0)); 

//  SORTING & REVERSING
console.log("\n--- Sorting & Reversing ---");
let unsorted = [3, 1, 2];
unsorted.sort();
console.log("sort:", unsorted); 

unsorted.reverse();
console.log("reverse:", unsorted); 

// Safe (ES2023)
console.log("toSorted:", [3, 1, 2].toSorted()); 
console.log("toReversed:", [1, 2, 3].toReversed()); 

//  CONVERTING / ITERATING
console.log("\n--- Converting / Iterating ---");
let letters = ["a", "b", "c"];
console.log("join:", letters.join("-")); 

let keys = [...letters.keys()];
let values = [...letters.values()];
let entries = [...letters.entries()];

console.log("keys:", keys); 
console.log("values:", values); 
console.log("entries:", entries); 