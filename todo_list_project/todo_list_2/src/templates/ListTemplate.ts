import FullList  from "../models/FullList";

interface DOMList{
    ul:HTMLUListElement,
    render(fullList:FullList):void,
    clear():void
}

export default class ListTemplate implements DOMList{
    ul:HTMLUListElement;

    static instance = new ListTemplate();

    constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    render(fullList: FullList): void {
        this.clear()

        fullList.list.forEach(el => {
            const li = document.createElement("li") as HTMLLIElement;
            li.className = "item";

            const check = document.createElement("input") as HTMLInputElement;
            check.type = "checkbox";
            check.id = el.id
            check.tabIndex = 0
            check.checked = el.checked
            li.append(check);

            check.addEventListener("change",() =>{
                el.checked = !el.checked
                fullList.save()
            })

            const label = document.createElement("label") as HTMLLabelElement;
            label.htmlFor = el.id
            label.textContent = el.item;
            li.append(label); 

            const button = document.createElement("button") as HTMLButtonElement;
            button.className = "button"
            button.innerText = "X"
            li.append(button)

            button.addEventListener("click",() =>{
                fullList.removeItem(el.id);
                this.render(fullList);
            })
            this.ul.append(li);
        })
    }

    clear(): void {
        this.ul.innerHTML = ""
    }
}