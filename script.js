
// ===============================
// 1️⃣ Get HTML Elements
// ===============================

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


// ===============================
// 2️⃣ Load Saved Data (On Page Load)
// ===============================

taskList.innerHTML = localStorage.getItem("data");


// ===============================
// 3️⃣ Add Button Click Event
// ===============================

addBtn.addEventListener("click", function() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    // Create List Item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("completeBtn");
    li.appendChild(completeBtn);

    // Create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    li.appendChild(deleteBtn);

    // Add li to Task List
    taskList.appendChild(li);

    // Clear Input Field
    taskInput.value = "";

    // Save to LocalStorage
    localStorage.setItem("data", taskList.innerHTML);

    
});
//add task using enter 
taskInput.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        addBtn.click();
    } 
})
//EVENT DELEGATION (applying event on ul(parent element))
taskList.addEventListener("click", function(e) {

    // DELETE BUTTON
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.remove();
        localStorage.setItem("data", taskList.innerHTML);
    }

    // COMPLETE BUTTON
    if (e.target.classList.contains("completeBtn")) {

        const li = e.target.parentElement;

        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            e.target.textContent = "Start Again";
        } else {
            e.target.textContent = "Complete";
        }

        localStorage.setItem("data", taskList.innerHTML);
    }

});