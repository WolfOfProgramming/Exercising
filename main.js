let el = document.getElementById("sumbit");
el.addEventListener("click", addThing, false);

function addThing() {
    
    let elValue = document.getElementById("AddThingToDo").value;
    let li = document.createElement("li");
    let content = document.createTextNode(elValue);
    li.appendChild(content);
    document.getElementById("list").appendChild(li);
}
