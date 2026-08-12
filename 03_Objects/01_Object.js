

let student = {
    name: "Alex",
    age: 22,
    city: "Kolkata",
    skills: ["HTML", "CSS", "JavaScript"],

    address: {
        state: "West Bengal",
        country: "India"
    },

    greet() {
        console.log("Hello, Welcome!");
    }
};

console.log(student);



console.log(student.name);          // Dot Notation
console.log(student["age"]);        // Bracket Notation

let key = "city";
console.log(student[key]);

// -----------------------------------------------------
// Adding Properties
// -----------------------------------------------------

student.email = "alex@gmail.com";

console.log(student);


student.age = 23;

console.log(student.age);



delete student.city;

console.log(student);



student.greet();



console.log(student.address.state);



console.log(student.skills);

console.log(student.skills[0]);



let students = [
    { name: "Alex", age: 22 },
    { name: "John", age: 24 },
    { name: "Sara", age: 21 }
];

console.log(students[1].name);



for (let key in student) {
    console.log(key, ":", student[key]);
}



console.log(Object.keys(student));



console.log(Object.values(student));



console.log(Object.entries(student));



let marks = {
    math: 95,
    english: 90
};

let completeStudent = Object.assign({}, student, marks);

console.log(completeStudent);



let copy = {
    ...student,
    college: "XYZ Engineering College"
};

console.log(copy);



let { name, age, skills } = student;

console.log(name);
console.log(age);
console.log(skills);



let { name: studentName } = student;

console.log(studentName);



let { gender = "Male" } = student;

console.log(gender);



console.log(student.address?.country);

console.log(student.contact?.phone);



let jsonData = JSON.stringify(student);

console.log(jsonData);



let json = '{"name":"Alex","age":22,"city":"Kolkata"}';

let obj = JSON.parse(json);

console.log(obj);

console.log(obj.name);

console.log(obj.city);



let employee = {
    id: 101,
    name: "Rahul",
    salary: 50000,
    department: "IT"
};



let { id, salary } = employee;

console.log(id);
console.log(salary);



let employeeJSON = JSON.stringify(employee);

console.log(employeeJSON);



let employeeObject = JSON.parse(employeeJSON);

console.log(employeeObject);

