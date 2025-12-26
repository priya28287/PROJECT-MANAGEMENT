function register() {
  fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  }).then(() => alert("Registered"));
}

function login() {
  fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid login");
    }
  });
}

function addProject() {
  fetch("http://localhost:5000/project", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: project.value })
  })
  .then(() => loadProjects());
}

function loadProjects() {
  fetch("http://localhost:5000/projects")
    .then(res => res.json())
    .then(data => {
      const ul = document.getElementById("projects");
      ul.innerHTML = "";
      data.forEach(p => {
        const li = document.createElement("li");
        li.innerText = p.name;
        ul.appendChild(li);
      });
    });
}

if (document.getElementById("projects")) {
  loadProjects();
}
