// task_0/js/main.ts

// 1. Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// 2. Create two students
const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 20,
    location: "Nairobi",
};

const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 22,
    location: "Mombasa",
};

// 3. Create an array containing the students
const studentsList: Student[] = [student1, student2];

// 4. Render a table using Vanilla JS
const table = document.createElement("table");
const headerRow = document.createElement("tr");

// Create table headers
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Loop through the students and add rows
studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);
