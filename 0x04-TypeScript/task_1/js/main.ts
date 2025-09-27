// Define the Teacher interface
interface Teacher {
    readonly firstName: string;       // cannot be modified after initialization
    readonly lastName: string;        // cannot be modified after initialization
    fullTimeEmployee: boolean;        // must always be defined
    yearsOfExperience?: number;       // optional
    location: string;                 // must always be defined
    [propName: string]: any;          // allows extra properties
}

// Example usage
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // extra property not declared above
};

console.log(teacher3);
