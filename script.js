let taskElement = document.querySelector("#task");
let task;
const btn = document.getElementById("enter");
let tasks = document.querySelector(".tasks");
let finished = document.querySelector(".finished")

taskElement.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        btn.click();
    }
})
btn.addEventListener("click", function(){
    
    let newTask = document.createElement("li")
    let deleteButton = document.createElement("button")
    let div = document.createElement("div")
    task = taskElement.value;
    newTask.appendChild(document.createTextNode(task));
    div.appendChild(newTask)
    div.appendChild(deleteButton)
    tasks.appendChild(div);
    taskElement.value = ""
    deleteButton.innerText = "Done"
    deleteButton.addEventListener("click", function(){
        tasks.removeChild(div)
        finished.appendChild(newTask)
    })
})
