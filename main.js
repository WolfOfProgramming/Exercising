const form = document.getElementById("form");
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    addThing();
    }, false);

const el = document.getElementById("AddThingToDo");

function addButtonDelete(element, content) {
    const button =  document.createElement('button');
    button.addEventListener("click", (event) => {
        event.preventDefault();
        deleteElement(element);
    });
    button.textContent = content;
    return button;
}
function addButtonEdit(element) {
    const button =  document.createElement('button');
    button.addEventListener("click", (event) => {
        event.preventDefault();
        editElement(element);
    });
    button.textContent = "Edit";
    return button;
}
function addButtonConfirm(element, divEl) {
    const button = document.createElement("button");
    button.addEventListener("click", (event) => {
        event.preventDefault();
        addNewContent(element, divEl);
    })
    button.textContent = "Confirm";
    return button;
}

function addThing() {

    const elValue = el.value;
    const li = document.createElement("li");
    const buttonDelete = addButtonDelete(li, "Delete");
    const buttonEdit = addButtonEdit(li);
    const span = document.createElement("span");

    li.appendChild(span);
    li.firstChild.textContent = elValue;
    li.appendChild(buttonDelete);
    li.appendChild(buttonEdit);

    document.getElementById("list").appendChild(li);
}

function deleteElement(element) {
   element.remove();
}

function editElement(element) {

    const input = document.createElement("input");
    const div = document.createElement("div");
    const buttonConfirm = addButtonConfirm(element, div);
    const buttonCancel = addButtonDelete(div, "Cancel");

    div.appendChild(input);
    div.appendChild(buttonCancel);
    div.appendChild(buttonConfirm);
    document.getElementById("form").appendChild(div);
}
function addNewContent(element, divEl) {
    element.firstChild.textContent = divEl.firstChild.value;
    deleteElement(divEl);
}
