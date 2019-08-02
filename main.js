const el = document.getElementById("submit");
el.addEventListener("submit", addThing, false);
const form = document.getElementById("form");
form.addEventListener("onsubmit", (event) => {event.preventDefault();}, false);

function addThing() {
    const elValue = document.getElementById("AddThingToDo").value;
    const li = document.createElement("li");
    li.textContent = elValue;
    document.getElementById("list").appendChild(li);
}
