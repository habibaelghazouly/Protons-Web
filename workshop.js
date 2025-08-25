/*📝 Problem: Student Grades Analysis

You are tasked with writing a JavaScript program that helps analyze
student performance in a class. Follow the steps below to complete the task:

1. Define an object Student that contains the following attributes:

        name → the name of the student
        percentage → the percentage score of the student
        grade → the grade of the student (initially null)

2. Create a list of students by initializing several Student objects with their names and percentages.

3. Use the map function to assign a grade (A, B, C, or F) to each student based on their percentage:

        90 and above → Grade A
        75–89 → Grade B
        50–74 → Grade C
        Below 50 → Grade F

4. Use the filter function to create a new list containing only the students who have passed (i.e., grade not equal to F).

5 . Use the forEach function to display each student’s details (name, percentage, grade) in the console.

*/

// Function to create student object
function createStudent(name, percentage) {
    return { name, percentage, grade: null };
}

// Create a list of students
const students = [  
    createStudent("Alice", 92),
    createStudent("Bob", 85),
    createStudent("Charlie", 67),
    createStudent("David", 45),
    createStudent("Eve", 78)
];

// Assign grades using map
const gradedStudents = students.map(student => {
    if (student.percentage >= 90) {
        student.grade = 'A';
    } else if (student.percentage >= 75) {
        student.grade = 'B';
    } else if (student.percentage >= 50) {
        student.grade = 'C';
    } else {
        student.grade = 'F';
    }
    return student;
});


// Step 5: Display each student's details
gradedStudents.forEach(student => {
    console.log(`Name: ${student.name}, Percentage: ${student.percentage}, Grade: ${student.grade}`);
});

