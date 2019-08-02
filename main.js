const el = document.getElementById("sumbit");
document.getElementById("sumbit").preventDefault();
el.addEventListener("sumbit", addThing, false);

function addThing() {
    const elValue = document.getElementById("AddThingToDo").value;
    const li = document.createElement("li");
    li.textContent = elValue;
    document.getElementById("list").appendChild(li);
}
