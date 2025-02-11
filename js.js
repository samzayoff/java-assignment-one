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

let name = getName();
let roll = prompt('Enter your Roll number:');
let html, css, java;

while (true) {
    html = parseFloat(prompt('Enter your HTML marks out of 100:'));
    if (isNaN(html) || html < 0 || html > 100) {
        alert('Invalid HTML marks. Please enter a number between 0 and 100.');
    } else {
        break;
    }
}

while (true) {
    css = parseFloat(prompt('Enter your CSS marks out of 100:'));
    if (isNaN(css) || css < 0 || css > 100) {
        alert('Invalid CSS marks. Please enter a number between 0 and 100.');
    } else {
        break;
    }
}

while (true) {
    java = parseFloat(prompt('Enter your JavaScript marks out of 100:'));
    if (isNaN(java) || java < 0 || java > 100) {
        alert('Invalid JavaScript marks. Please enter a number between 0 and 100.');
    } else {
        break;
    }
}

let totalMarks = 300;
let obtainedMarks = html + css + java;
let percentage = (obtainedMarks / totalMarks) * 100;

alert("Name: " + name + "\n" +
    "Roll Number: " + roll + "\n" +
    "HTML Marks: " + html + "\n" +
    "CSS Marks: " + css + "\n" +
    "JavaScript Marks: " + java + "\n" +
    "Total Marks: " + obtainedMarks + "\n" +
    "Percentage: " + percentage.toFixed(2) + "%");

console.log("Name:", name);
console.log("Roll Number:", roll);
console.log("HTML:", html);
console.log("CSS:", css);
console.log("JavaScript:", java);
console.log("Total Marks:", obtainedMarks);
console.log("Percentage:", percentage.toFixed(2) + "%");
