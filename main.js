const el = document.getElementById("sumbit");
el.addEventListener("click", addThing, false);

function addThing() {
    
    const elValue = document.getElementById("AddThingToDo").value;
    const li = document.createElement("li");
    li.textContent = elValue;
    document.getElementById("list").appendChild(li);
}
