function getName() {
    let name = prompt("Enter your name:");

    if (name === null || name.trim() === "") {
        alert("Name cannot be empty.");
        return getName();
    }

    if (typeof name !== "string") {
        alert("Invalid input. Please enter a text (name).");
        return getName();
    }

    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(name)) {
        alert("Invalid name. Please use letters and spaces only.");
        return getName();
    }

    return name;
}

function getRollNumber() {
    let roll = prompt("Enter your Roll number:");

    if (roll === null || roll.trim() === "") {
        alert("Roll number cannot be empty.");
        return getRollNumber();
    }

    const rollRegex = /^\d+$/;

    if (!rollRegex.test(roll)) {
        alert("Invalid roll number. Please enter numbers only.");
        return getRollNumber();
    }

    return roll;
}

function getMarks(subject) {
    while (true) {
        let marks = parseFloat(prompt(`Enter your ${subject} marks out of 100:`));

        if (isNaN(marks)) {
            alert(`Invalid input. Please enter a number for ${subject}.`);
        } else if (marks < 0 || marks > 100) {
            alert(`Invalid ${subject} marks. Please enter a number between 0 and 100.`);
        } else {
            return marks;
        }
    }
}

let name = getName();
let roll = getRollNumber();

let web = getMarks("Web Engineering");
let AI = getMarks("Artificial Intelligence");
let python = getMarks("Python");
let dsa = getMarks("Data Structures and Algorithms");
let dbms = getMarks("Database Management Systems");

let totalMarks = 500;
let obtainedMarks = web + AI + python + dsa + dbms;
let percentage = (obtainedMarks / totalMarks) * 100;

alert(
    "Name: " + name + "\n" +
    "Roll Number: " + roll + "\n" +
    "Web Engineering Marks: " + web + "\n" +
    "Artificial Intelligence Marks: " + AI + "\n" +
    "Python Marks: " + python + "\n" +
    "Data Structures and Algorithms Marks: " + dsa + "\n" +
    "Database Management Systems Marks: " + dbms + "\n" +
    "Total Marks: " + obtainedMarks + "\n" +
    "Percentage: " + percentage.toFixed(2) + "%"
);

console.log("Name:", name);
console.log("Roll Number:", roll);
console.log("Web Engineering:", web);
console.log("Artificial Intelligence:", AI);
console.log("Python:", python);
console.log("Data Structures and Algorithms:", dsa);
console.log("Database Management Systems:", dbms);
console.log("Total Marks:", obtainedMarks);
console.log("Percentage:", percentage.toFixed(2) + "%");
