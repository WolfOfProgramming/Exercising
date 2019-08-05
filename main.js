const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    addThing();
    }, false);

function addThing() {
    const elValue = document.getElementById("AddThingToDo").value;

    const buttonDelete = document.createElement('button');
    buttonDelete.addEventListener("click", (event) => {
        event.preventDefault();
        deleteElement(buttonDelete);
    });
    buttonDelete.textContent = "Delete";

    const buttonEdit = document.createElement('button');
    buttonEdit.addEventListener("click", (event) => {
        event.preventDefault();
        editElement(buttonEdit);
    });
    buttonEdit.textContent = "Edit";

    const li = document.createElement("li");
    li.textContent = elValue;
    li.appendChild(buttonDelete);
    li.appendChild(buttonEdit);

    document.getElementById("list").appendChild(li);
}

function deleteElement(child) {
   const parent = child.parentNode;
   parent.remove();
}

function editElement(child) {
    const parent = child.parentNode; //li
    const input = document.createElement("input");

    const buttonConfirm = document.createElement("button");
    buttonConfirm.addEventListener("click", (event) => {
        event.preventDefault();
        addNewContent(parent, buttonConfirm);
    })
    buttonConfirm.textContent = "Confirm";


    const buttonCancel = document.createElement("button");
    buttonCancel.addEventListener("click", (event) => {
        event.preventDefault();
        deleteElement(buttonCancel);
    })
    buttonCancel.textContent = "Cancel";

    const div = document.createElement("div");
    div.appendChild(input);
    div.appendChild(buttonCancel);
    div.appendChild(buttonConfirm);
    document.getElementById("form").appendChild(div);
}
function addNewContent(el, button) {
    const buttonParent = button.parentNode;
    el.textContent = buttonParent.firstChild.value;
    deleteElement(button);
}
