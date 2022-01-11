import {ToDo} from './models/ToDo.js';
import {listTemplate} from './models/listTemplate';

window.onload=()=>{
    let btnAdd=document.querySelector("#btnAdd") as HTMLButtonElement;
    const text="Inform Rahul about new number";

    btnAdd.addEventListener("click",(event:Event)=>{
        event.preventDefault();
        let todo=new ToDo(2,text);
        todo
    });
};
