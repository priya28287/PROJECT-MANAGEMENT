const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let projects = [];

// Register
app.post("/register", (req, res) => {
  users.push(req.body);
  res.json({ message: "User registered" });
});

// Login
app.post("/login", (req, res) => {
  const user = users.find(
    u => u.email === req.body.email && u.password === req.body.password
  );
  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Add Project
app.post("/project", (req, res) => {
  projects.push(req.body);
  res.json({ message: "Project added" });
});

// Get Projects
app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(5000, () => {
  console.log("Project Management Server running on http://localhost:5000");
});
