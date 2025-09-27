// Define Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // allows additional properties
}

// Extend Teacher interface for Directors
interface Director extends Teacher {
    numberOfReports: number;
}

// Example usage
const director1: Director = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Interface for the function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Function implementation using destructuring
const printTeacher: printTeacherFunction = function ({ firstName, lastName }: { firstName: string; lastName: string }): string {
    return `${firstName[0]}. ${lastName}`;
};

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
// Output: J. Doe
