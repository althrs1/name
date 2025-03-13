function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;
        li.onclick = () => li.remove();
        taskList.appendChild(li);
        taskInput.value = "";
    }
