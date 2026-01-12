function addTask() {
    let taskText = document.getElementById("taskInput").value;
    if(taskText === ""){
        alert("Please enter a task      ");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onclick = function(){
        if(checkbox.checked){
            li.style.textDecoration = "line-through";
        }else{
            li.style.textDecoration = "none";

        }
    };
    li.appendChild(checkbox);
    li.append(" "+ taskText);

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}