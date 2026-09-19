const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", function () {
    const task = todoInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    completeBtn.addEventListener("click", function () {
        taskText.style.textDecoration = "line-through";
    });

    editBtn.addEventListener("click", function () {
        const newTask = prompt("Edit your task:", taskText.textContent);

        if (newTask !== null && newTask.trim() !== "") {
            taskText.textContent = newTask.trim();
        }
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    todoInput.value = "";
});