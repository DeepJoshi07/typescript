import './css/style.css'
import FullList from './models/FullList'
import ListItem from './models/ListItem'
import ListTemplate from './templates/ListTemplate'

const initApp = () => {
    const fullList = FullList.instance;
    const listTemplate = ListTemplate.instance;

    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;

    itemEntryForm.addEventListener("submit",(e:SubmitEvent)=>{
        e.preventDefault();
        const input = document.getElementById("newItem") as HTMLInputElement;

        const newEntryText:string = input.value.trim();
        if(!newEntryText.length) return;

        const itemId = fullList.list.length ? parseInt(fullList.list[fullList.list.length -1].id)+1:1;

        const newItem = new ListItem(itemId.toString(),newEntryText);

        fullList.addItem(newItem);
        listTemplate.render(fullList);
        
        input.value = " ";
    })

    const clearItems = document.getElementById("clearItemsButton")

    clearItems?.addEventListener("click",():void => {
        fullList.clearList();
        listTemplate.clear()
    })
    fullList.load();
    listTemplate.render(fullList);
}

document.addEventListener("DOMContentLoaded",initApp)