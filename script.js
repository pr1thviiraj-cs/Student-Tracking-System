document.addEventListener("DOMContentLoaded", () => {

let students = JSON.parse(localStorage.getItem("studentData")) || [];

const studentName = document.getElementById("studentName");
const addBtn = document.getElementById("addBtn");
const body = document.getElementById("studentBody");
const themeToggle = document.getElementById("themeToggle");


/* 🌙 LOAD SAVED THEME */
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
  themeToggle.textContent = "Light Mode";
  themeToggle.classList.add("active");
}


/* 🌙 TOGGLE THEME */
themeToggle.onclick = () => {

  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
  themeToggle.classList.toggle("active", isDark);

  localStorage.setItem("theme", isDark ? "dark" : "light");
};


/* 💾 SAVE DATA */
function save(){
  localStorage.setItem("studentData", JSON.stringify(students));
}


/* ➕ ADD STUDENT */
addBtn.onclick = () => {

  const name = studentName.value.trim();
  if(!name) return alert("Enter student name");

  students.push({
    id: Date.now(),
    name,
    present: 0,
    total: 0,
    subjects:{
      math:0, physics:0, chem:0, english:0, cs:0
    }
  });

  studentName.value="";
  save();
  render();
};


/* 🎓 GRADE POINT SYSTEM */
function gradePoint(m){

  if(m>=90) return 10;
  if(m>=80) return 9;
  if(m>=70) return 8;
  if(m>=60) return 7;
  if(m>=50) return 6;
  if(m>=45) return 5;
  if(m>=40) return 4;
  return 0;
}


/* 🧮 CGPA CALCULATION */
function calcCGPA(subjects){

  const points = Object.values(subjects).map(gradePoint);
  const total = points.reduce((a,b)=>a+b,0);

  return (total / points.length).toFixed(2);
}


/* 🖥 RENDER TABLE */
function render(){

  body.innerHTML = "";

  students.forEach(s => {

    const percent = s.total
      ? ((s.present / s.total) * 100).toFixed(0)
      : 0;

    const cgpa = calcCGPA(s.subjects);

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${s.name}</td>

      <td>
        ${percent}%
        <button onclick="markPresent(${s.id})">P</button>
        <button onclick="markAbsent(${s.id})">A</button>
      </td>

      <td><input type="number" min="0" max="100" value="${s.subjects.math}" onchange="updateMarks(${s.id},'math',this.value)"></td>
      <td><input type="number" min="0" max="100" value="${s.subjects.physics}" onchange="updateMarks(${s.id},'physics',this.value)"></td>
      <td><input type="number" min="0" max="100" value="${s.subjects.chem}" onchange="updateMarks(${s.id},'chem',this.value)"></td>
      <td><input type="number" min="0" max="100" value="${s.subjects.english}" onchange="updateMarks(${s.id},'english',this.value)"></td>
      <td><input type="number" min="0" max="100" value="${s.subjects.cs}" onchange="updateMarks(${s.id},'cs',this.value)"></td>

      <td><b>${cgpa}</b></td>

      <td><button onclick="removeStudent(${s.id})">Delete</button></td>
    `;

    body.appendChild(row);
  });
}


/* 📅 PRESENT */
window.markPresent = id => {
  const s = students.find(x => x.id === id);
  s.present++;
  s.total++;
  save();
  render();
};


/* ❌ ABSENT */
window.markAbsent = id => {
  const s = students.find(x => x.id === id);
  s.total++;
  save();
  render();
};


/* ✏ UPDATE MARKS (LIMIT 0–100) */
window.updateMarks = (id, subject, val) => {

  let marks = parseInt(val);

  if(isNaN(marks)) marks = 0;

  marks = Math.max(0, Math.min(100, marks));

  const s = students.find(x => x.id === id);
  s.subjects[subject] = marks;

  save();
  render();
};


/* 🗑 DELETE */
window.removeStudent = id => {
  students = students.filter(s => s.id !== id);
  save();
  render();
};


/* 🚀 INITIAL LOAD */
render();

});