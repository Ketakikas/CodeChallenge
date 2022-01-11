import { ToDo } from './models/ToDo.js';
window.onload = () => {
    let btnAdd = document.querySelector("#btnAdd");
    const text = "Inform Rahul about new number";
    btnAdd.addEventListener("click", (event) => {
        event.preventDefault();
        let todo = new ToDo(2, text);
    });
};
