// question 01
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// question 02
const number = [1, 2, 3, 4, 5];
const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// question 03
const students = [
    { name: "Alice", grade: "B" },
    { name: "Bob", grade: "A" },
    { name: "Charlie", grade: "C" }
];
const topStudent = students.find(student => student.grade === "A");
console.log(topStudent); // Output: { name: "Bob", grade: "A" }

// question 04
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// question 05
const colors = ["Red", "Green", "Blue", "Yellow"];
const [firstColor, secondColor] = colors;
console.log(firstColor);  // Output: Red
console.log(secondColor); // Output: Green

// question 06
const nestedArray = [1, 2, [3, 4], [5, [6]]];
const flatArray = nestedArray.flat(1);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, [6]]

// question 07
function calculateAverage(...scores) {
    const sum = scores.reduce((total, score) => total + score, 0);
    const count = scores.length;
    return sum / count;
}
const averageScore = calculateAverage(90, 85, 95, 100);
console.log(averageScore); // Output: 92.5

// question 08
const fruits = ["Apple", "Banana", "Cherry", "Mango"];
const hasBanana = fruits.includes("Banana");
const hasGrape = fruits.includes("Grape");
console.log(hasBanana); 
console.log(hasGrape);  

// question 09
const word = "HELLO";
const letterArray = Array.from(word);
console.log(letterArray); // Output: ["H", "E", "L", "L", "O"]

// question 10
const names = ["Tom", "Sara", "Mia", "Leo"];
const lastItem = names.at(-1);
console.log(lastItem); // Output: Leo