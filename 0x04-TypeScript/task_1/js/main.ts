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
    return `${firstName}. ${lastName}`;
}

// Interface for the function
interface printTeacherFunction {
    ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

// Example usage
console.log(printTeacher("John", "Doe"));
// Output: J. Doe

// Interface describing the constructor of StudentClass
interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the StudentClass methods
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Class StudentClass implementation
class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName());     // Alice
console.log(student.workOnHomework()); // Currently working
