const el = document.getElementById("sumbit");
el.addEventListener("sumbit", addThing, false);

function addThing() {
    document.preventDefault();
    const elValue = document.getElementById("AddThingToDo").value;
    const li = document.createElement("li");
    li.textContent = elValue;
    document.getElementById("list").appendChild(li);
}
