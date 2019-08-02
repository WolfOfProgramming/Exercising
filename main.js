
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    addThing();
    }, false);

function addThing() {
    const elValue = document.getElementById("AddThingToDo").value;
    const li = document.createElement("li");
    li.textContent = elValue;
    document.getElementById("list").appendChild(li);
}
