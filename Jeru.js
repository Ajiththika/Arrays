











































































































































































































































































































// Find()
const users = [
  { id: 1, name: 'Alice', role: 'Engineer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Charlie', role: 'Manager' },
  { id: 2, name: 'David', role: 'Intern' } // Note: Another user with id: 2 exists later
];

// Use find() to get the first user with id equal to 2
const targetId = 2;
const foundUser = users.find(user => user.id === targetId);

console.log(foundUser);



// FindIndex
const library = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: 1925 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', published: 1813 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', published: 1960 },
  { title: 'Sense and Sensibility', author: 'Jane Austen', published: 1811 } // Another book by Jane Austen
];

// Use findIndex() to get the index of the first book written by Jane Austen
const targetAuthor = 'Jane Austen';
const austenIndex = library.findIndex(book => book.author === targetAuthor);

// Try to find the index of a book by an author not in the list
const unknownAuthor = 'George Orwell';
const orwellIndex = library.findIndex(book => book.author === unknownAuthor);


console.log(`Index of first book by ${targetAuthor}: ${austenIndex}`);
console.log(`Index of first book by ${unknownAuthor}: ${orwellIndex}`);

// Filter()
const scores = [35, 78, 92, 41, 65, 22, 88, 50];

// Use filter() to create a new array containing only the passing scores (where score > 50)
const passingScores = scores.filter(score => score > 50);

console.log("Original Scores:", scores);
console.log("Passing Scores (Filtered):", passingScores);



// ToSorted()
const numbers = [10, 5, 25, 1, 15];

// 1. Sort in ascending order without modifying the original array
const sortedAscending = numbers.toSorted((a, b) => a - b);

// 2. Sort in descending order without modifying the original array
const sortedDescending = numbers.toSorted((a, b) => b - a);


console.log("Original Array: ", numbers);
console.log("Ascending Order: ", sortedAscending);
console.log("Descending Order: ", sortedDescending);



// ToSpliced
const originalColors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// Create a new array:
// 1. Start at index 2 ("Blue")
// 2. Remove 1 element ("Blue")
// 3. Insert "Cyan" and "Magenta"
const newColors = originalColors.toSpliced(2, 1, "Cyan", "Magenta");

console.log("Original Array (Unchanged):", originalColors);
console.log("New Array (Spliced):", newColors);



// With()
const originalFruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Create a new array where the element at index 2 ("Cherry") is replaced with "Grape"
const newFruits = originalFruits.with(2, "Grape");

// Use a negative index to replace the element at the end (-1 replaces "Elderberry" with "Kiwi")
const updatedFruits = originalFruits.with(-1, "Kiwi");

console.log("Original Array (Unchanged):", originalFruits);
console.log("New Array with Index 2 Changed:", newFruits);
console.log("New Array with Last Index Changed:", updatedFruits);


// Every()
const initialGrades = ['A', 'B', 'C', 'D', 'F'];

// Create a new array where the element at index 1 ('B') is replaced with 'A'
const adjustedGrades = initialGrades.with(1, 'A');

console.log("Original Grades:", initialGrades);
console.log("Adjusted Grades:", adjustedGrades);


// Some()
const number = [2, 5, 8, 11, 4];

// Check if some numbers are greater than 10
const isThereAnyBigNumber = numbers.some(number => number > 10);

// Check if some numbers are greater than 20
const isThereAnyHugeNumber = numbers.some(number => number > 20);

console.log("Array:", number);
console.log("Are some numbers > 10? ", isThereAnyBigNumber);
console.log("Are some numbers > 20? ", isThereAnyHugeNumber);


// Sort()
const fruits = ["Banana", "Apple", "Cherry", "Date"];
const num = [100, 20, 5, 1]; // Array of numbers

// 1. String Sorting (Correct for strings)
fruits.sort();

// 2. Default Sorting on Numbers (INCORRECT for numbers)
// It treats the numbers as strings: "1", "100", "20", "5"
numbers.sort();

// 3. Numerical Sorting (CORRECT for numbers)
const correctNumbers = [100, 20, 5, 1];
correctNumbers.sort((a, b) => a - b); 

console.log("Fruits (String Sort):", fruits);
console.log("Numbers (Default Sort):", num);
console.log("Numbers (Correct Numerical Sort):", correctNumbers);

// reverse()
const letters = ['A', 'B', 'C', 'D', 'E'];

console.log("Original Array:", letters);

// Reverse the array in place
letters.reverse();

console.log("Reversed Array:", letters);