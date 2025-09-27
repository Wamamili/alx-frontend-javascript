Creating an Interface for a Student
📌 Objective

The goal of this task is to learn the basics of TypeScript interfaces, working with typed arrays, and rendering data dynamically on a web page using Vanilla JavaScript.

📂 Project Structure
0x04-TypeScript/
│
├── task_0/
│   ├── js/
│   │   └── main.ts
│   ├── package.json
│   ├── .eslintrc.js
│   ├── tsconfig.json
│   └── webpack.config.js

📝 Task Description

Create an interface Student with the following properties:

firstName (string)

lastName (string)

age (number)

location (string)

Create two students and add them into an array named studentsList.

Using Vanilla JavaScript, render a table where each row displays:

The first name of the student

The location of the student

⚙️ Setup Instructions
1. Install Dependencies
npm install

2. Build the Project
npm run build

3. Start Development Server
npm run start-dev


This will open the project in your browser via webpack-dev-server.

✅ Requirements

Code must compile without errors:

No type errors found.


All variables should use TypeScript types when possible.

ESLint must pass without issues.

The final webpage should display a table with student data.

📸 Expected Output

When you open the page in the browser, a simple table should render like this:

First Name	Location
Alice	Nairobi
Bob	Mombasa
🛠️ Tools & Technologies

TypeScript

Webpack

ESLint (@typescript-eslint)

Jest (for testing)

Vanilla JavaScript (DOM manipulation)

✨ Author

Project done as part of the 0x04-TypeScript learning tasks in the frontend-javascript repository.