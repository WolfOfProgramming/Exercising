const el = document.getElementById("submit");
el.addEventListener("submit", addThing, false).preventDefault();

function addThing() {
    const elValue = document.getElementById("AddThingToDo").value;
    const li = document.createElement("li");
    li.textContent = elValue;
    document.getElementById("list").appendChild(li);
}
