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
// Function implementation
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// Interface for the function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Example usage
console.log(printTeacher("John", "Doe"));
// Output: J. Doe
