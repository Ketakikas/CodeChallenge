export class listTemplate {
    constructor(container) {
        this.container = container;
    }
    AddToDo(value, text) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.value = value;
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.dataset.value = value.toString();
        checkBox.className = "check";
        checkBox.id = "chkToDo" + value.toString();
        li.append(checkBox);
        li.append(text);
        this.container.append(li);
    }
}
