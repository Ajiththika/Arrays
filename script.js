//          ARRAY BASICS

let students = ["Ajie", "Renu", "Pooja", "Arul"];
console.log(students[1]); // Access 2nd item

console.log(Array.of(5, 10, 15)); // Create array
console.log(Array.from("hello")); // String to array
console.log(Array.isArray(students)); // Check if array

//     ADDING / REMOVING ITEMS

let fruits = ["apple", "banana"];
fruits.push("grape");      // Add end
fruits.pop();              // Remove end
fruits.unshift("orange");  // Add start
fruits.shift();            // Remove start

let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow"); // Replace item

console.log(fruits);
console.log(colors);
console.log(["pen", "pencil"].concat(["eraser", "sharpener"])); // Combine arrays

//      COPYING & MODIFYING

let data = [1, 2, 3, 4, 5];
data.copyWithin(0, 3); 
console.log(data);

console.log(new Array(5).fill("N/A")); // Fill array
console.log(["a", "b", "c", "d"].slice(1, 3)); 

console.log(["cat", "dog", "bird"].toSpliced(1, 1)); // Non-destructive splice
console.log([10, 20, 30].with(1, 99));             // Replace safely

//        SEARCHING ELEMENTS

let prices = [45, 80, 120];
console.log(prices.find(p => p > 100));
console.log(prices.findIndex(p => p > 50));
console.log(["apple", "banana", "mango"].includes("banana"));
console.log(["x", "y", "x"].indexOf("x"));
console.log(["sun", "moon", "star"].at(-1));

//       TRANSFORMING DATA

console.log([1000, 2000, 3000].map(s => s * 1.1)); // Change each item - map
console.log([5, 10, 15, 20].filter(n => n > 10)); // Keep items
console.log([1, 2, 3, 4].reduce((a, b) => a + b)); // Combine
console.log([1, [2, [3]]].flat(2));               // Flatten
console.log([1, 2, 3].flatMap(x => [x, x * 2]));  // Map + flatten

//       CHECK CONDITIONS

console.log([20, 25, 30].every(a => a >= 18)); // every
console.log([12, 17, 22].some(a => a < 18));   // some

//       SORT & REVERSE

let words = ["banana", "apple", "cherry"];
words.sort();
words.reverse();
console.log(words);

console.log([3, 1, 2].toSorted());   // Non-destructive sort
console.log([10, 20, 30].toReversed()); // Non-destructive reverse

//      CONVERT & ITERATE

console.log(["Jan", "Feb", "Mar"].join(", ")); 
console.log([...["x", "y", "z"].keys()]);      // Keys
console.log([...["x", "y", "z"].values()]);    // Values
console.log([...["x", "y", "z"].entries()]);   // Key-value pairs
