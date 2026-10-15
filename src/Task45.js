const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Ravi" },
    { id: 2, name: "Priya" }
];

// Read students
app.get('/students', (req, res) => {
    res.json(students);
});

// Create student
app.post('/students', (req, res) => {
    students.push(req.body);
    res.send("Student added successfully");
});

// Update student
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (student) {
        student.name = req.body.name;
        res.send("Student updated successfully");
    } else {
        res.send("Student not found");
    }
});

// Delete student
app.delete('/students/:id', (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.send("Student deleted successfully");
});

app.listen(3000);
console.log("Server running on port 3000");