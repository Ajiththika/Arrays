//          ARRAY BASICS
let students = ["Ajie", "Renu", "Pooja", "Arul"];
console.log(students[1]); // Access 2nd item

console.log(Array.of(5, 10, 15)); // Create array
console.log(Array.from("hello")); // String to array
console.log(Array.isArray(students)); // Check if array

//     ADDING / REMOVING ITEMS
let fruits = ["apple", "banana"];
fruits.push("grape");      // Add end
console.log(fruits);

fruits.pop();              // Remove end
console.log(fruits);

fruits.unshift("orange");  // Add start
console.log(fruits);

fruits.shift();            // Remove start
console.log(fruits);

let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow"); // Replace item
console.log(colors);

let a = ["pen", "pencil"];
let d = ["eraser", "sharpener"];
let combined = a.concat(d);
console.log(combined); 
console.log(a); 


//      COPYING & MODIFYING
let data = [1, 2, 3, 4, 5];
data.copyWithin(0, 3);
console.log(data);

let blank = new Array(4).fill("N/A");
console.log(blank); // Fill array

let letters = ["a", "b", "c", "d"];
let part = letters.slice(1, 3);
console.log(part);

let animals = ["cat", "dog", "bird"].toSpliced(1, 1);
console.log(animals);

let clone = [...nums];
clone[1] = 99;
console.log(clone);


//  Searching Elements

// find() → gets the first number greater than 100
let prices = [45, 80, 120];
let bigPrice = prices.find(price => price > 100);
console.log(bigPrice); 

// findIndex() → gives position of first number greater than 50
let firstIndex = prices.findIndex(price => price > 50);
console.log(firstIndex); 

// findLast() → finds last number greater than 50
let lastPrice = prices.findLast(price => price > 50);
console.log(lastPrice); 

// findLastIndex() → gives index of last number greater than 50
let lastIndex = prices.findLastIndex(price => price > 50);
console.log(lastIndex); 

// includes() → checks if "banana" is in the list
let fruits1 = ["apple", "banana", "mango"];
console.log(fruits1.includes("banana")); 

// indexOf() → finds first position of "x"
let letter = ["x", "y", "x"];
console.log(letter.indexOf("x")); 

// lastIndexOf() → finds last position of "x"
console.log(letter.lastIndexOf("x")); 

// at() → gets the last item easily
let planets = ["sun", "moon", "star"];
console.log(planets.at(-1)); // "star"


//  Transforming Data

// map() → multiply each number by 2
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

// filter() → keep only numbers greater than 10
let scores = [5, 10, 15, 20];
let highScores = scores.filter(score => score > 10);
console.log(highScores); // [15, 20]

// reduce() → add all numbers together
let total = [1, 2, 3, 4].reduce((sum, num) => sum + num);
console.log(total); // 10

// reduceRight() → joins words from right to left
let words = ["a", "b", "c"];
let joinRight = words.reduceRight((a, b) => a + b);
console.log(joinRight); // "cba"

// flat() → flatten nested arrays
let nested = [1, [2, [3]]];
let flat = nested.flat(2);
console.log(flat); // [1, 2, 3]

// flatMap() → double each number and flatten
let nums = [1, 2, 3];
let flatMapExample = nums.flatMap(n => [n, n * 2]);
console.log(flatMapExample); // [1, 2, 2, 4, 3, 6]


//  Checking Conditions

// every() → are all ages above 18?
let ages = [20, 25, 30];
console.log(ages.every(age => age >= 18)); // true

// some() → is there any age less than 18?
let mixedAges = [12, 17, 22];
console.log(mixedAges.some(age => age < 18)); // true


//  Sorting & Reversing

// sort() → sorts alphabetically
let fruits2 = ["banana", "apple", "cherry"];
fruits2.sort();
console.log(fruits2); 

// reverse() → reverses the order
fruits2.reverse();
console.log(fruits2); 

// toSorted() → new sorted copy (doesn't change original)
let numbers2 = [3, 1, 2];
let sortedCopy = numbers2.toSorted();
console.log(sortedCopy); //
console.log(numbers2); //  (original unchanged)

// toReversed() → new reversed copy (doesn't change original)
let numbers3 = [10, 20, 30];
let reversedCopy = numbers3.toReversed();
console.log(reversedCopy); 
console.log(numbers3); 


//  Converting & Iterating

// join() → join items into one string
let months = ["Jan", "Feb", "Mar"];
let joined = months.join(", ");
console.log(joined); 

// keys() → get all positions (indexes)
let arrKeys = [...["x", "y", "z"].keys()];
console.log(arrKeys); 

// values() → get all items
let arrValues = [...["x", "y", "z"].values()];
console.log(arrValues); 

// entries() → get both position and value
let arrEntries = [...["x", "y", "z"].entries()];
console.log(arrEntries); 


//  Extra 

// forEach() → run code for each item
let names = ["Tom", "Jerry", "Spike"];
names.forEach(name => console.log("Hello", name));

// toString() → turns array into string
let letters2 = ["a", "b", "c"];
console.log(letters2.toString()); // "a,b,c"

