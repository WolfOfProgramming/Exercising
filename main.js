const el = document.getElementById("submit");
el.addEventListener("submit", function(e){e.addThing() e.preventDefault()}, false)

function addThing() {
    const elValue = document.getElementById("AddThingToDo").value;
    const li = document.createElement("li");
    li.textContent = elValue;
    document.getElementById("list").appendChild(li);
}
