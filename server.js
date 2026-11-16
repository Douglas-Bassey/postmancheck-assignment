const express = require("express");
const app = express();
const PORT = 3000;

// middleware to recieve JSON data

app.use(express.json());

// hardcoded student data
let students = [
  {
    id: 1,
    name: "Udeme Akpan",
    age: 14,
    email: "john@gmail.com",
    course: "Backend Development",
  },

  {
    id: 2,
    name: "Michelle Andrew",
    age: 12,
    email: "mary@gmail.com",
    course: "Frontend Development",
  },

  {
    id: 3,
    name: "Samuel Matthew",
    age: 70,
    email: "peter@gmail.com",
    course: "Mobile Development",
  },
];

students.push({
  id: 4,
  name: "Linlcon Sporty",
  status: "BROKE",
  age: 1,
  email: "leslie@gmail.com",
  course: "UI/UX",
});

// get all students
app.get("/api/students", (req, res) => {
  res.status(200).json({
    success: true,
    message: "All student",
    data: students,
  });
});

// get only one student

app.get("/api/studentz", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Student 2",
    data: students[0],
  });
});

app.put("/api/studentsUpdate", (req, res) => {
  students[2].course = "UI/UX";

  res.status(200).json({
    success: true,
    message: "updated",
    data: students[2],
  });
});

// start server
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
