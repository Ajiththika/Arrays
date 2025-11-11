// questions

//  Question 01 - Students Score Ranking
let customers = [
    { id: 'C001', score: 85 },
    { id: 'C002', score: 92 },
    { id: 'C003', score: 78 },
    { id: 'C004', score: 95 }
];
let topN = 2; // Example User Input: To find the top 2 customers

// Step 1: Use toSorted() with a custom comparator (b.score - a.score) for descending order.
let sortedCustomers = customers.toSorted((a, b) => b.score - a.score);

// sortedCustomers: [{id: 'C004', score: 95}, {id: 'C002', score: 92}, ...]

// Step 2: Use slice() to get the first 'topN' elements.
let topCustomers = sortedCustomers.slice(0, topN);

console.log(topCustomers);
/* Output (topN = 2):
[
    { id: 'C004', score: 95 },
    { id: 'C002', score: 92 }
]
*/
alert(`The top ${topN} customers with the highest scores are: ${JSON.stringify(topCustomers)}`);

//  Question 02 - School Attendance Record Processing
let studentRoster = [
    { studentID: 'STU-101', status: 'REGISTERED', grade: 10, name: 'Alice' },
    { studentID: 'STU-102', status: 'PENDING', grade: 11, name: 'Bob' },
    { studentID: 'STU-103', status: 'REGISTERED', grade: 8, name: 'Charlie' },
    { studentID: 'STU-104', status: 'REGISTERED', grade: 12, name: 'David' }
];

let requiredStatus = 'REGISTERED'; // Example User Input
let minGradeLevel = 9;             // Example User Input

// Step 1: Filter students who are REGISTERED AND meet the minimum grade level (Grade 9 or higher)
let validStudents = studentRoster.filter(student => {
    return student.status === requiredStatus && student.grade >= minGradeLevel;
});
// validStudents: [{id: 'STU-101', ...}, {id: 'STU-104', ...}]

// Step 2: Map the filtered list to a simple output string (Name and Grade)
let studentReport = validStudents.map(student => {
    return `${student.name} (Grade ${student.grade})`;
});

console.log(studentReport);
// Output: ['Alice (Grade 10)', 'David (Grade 12)']
alert(`Valid Students for Report: [${studentReport.join(', ')}]`);