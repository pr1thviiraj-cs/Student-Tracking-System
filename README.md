# 🎓 Student Tracker Web App

A responsive student management web application built using **HTML, CSS, and vanilla JavaScript** that allows tracking of attendance, subject marks, and automatic CGPA calculation with persistent storage using LocalStorage.

---

## 🚀 Live Demo
https://pr1thviraj-cs.github.io/Drag-Love-Notes/

---

## ✨ Features

- ➕ Add new students dynamically
- 📅 Mark attendance (Present / Absent)
- 🧮 Automatic attendance percentage calculation
- 📝 Enter and update subject marks
- 🎯 Auto CGPA calculation based on grade point system
- 💾 Data stored in browser using LocalStorage
- 🌙 Dark mode / Light mode toggle with saved preference
- 🗑 Delete student records
- 📱 Responsive and clean UI

---

## 🛠️ Tech Stack

- **HTML5** → Structure :contentReference[oaicite:0]{index=0}  
- **CSS3** → Styling & Dark mode UI :contentReference[oaicite:1]{index=1}  
- **Vanilla JavaScript (ES6)** → Logic, DOM manipulation & LocalStorage :contentReference[oaicite:2]{index=2}  

---

## 📊 CGPA Calculation Logic

Grade points are assigned as:

| Marks | Grade Point |
|-------|------------|
| 90–100 | 10 |
| 80–89  | 9  |
| 70–79  | 8  |
| 60–69  | 7  |
| 50–59  | 6  |
| 45–49  | 5  |
| 40–44  | 4  |
| < 40   | 0  |

CGPA = Average of grade points across all subjects.

---

## 📂 Project Structure
