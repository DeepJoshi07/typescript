import ListItem from "./ListItem";

interface List{
    list:ListItem[],
    load():void
    save():void
    addItem(itemObj:ListItem):void
    clearList():void
    removeItem(id:string):void
}

export default class FullList implements List{

    static instance:FullList = new FullList();

    constructor(private _list:ListItem[]= []){}

    get list ():ListItem[]{
        return this._list
    }

    load():void{
        const storedList = localStorage.getItem("mylist");

        if(typeof storedList !== "string")return;

        const parsedList:{_id:string,_item:string,_checked:boolean}[] = JSON.parse(storedList)

        parsedList.forEach(el => {
            const newItem = new ListItem(el._id,el._item,el._checked);

            FullList.instance.addItem(newItem);
        });
    }

    save():void{
        localStorage.setItem("mylist",JSON.stringify(this._list))
    }

    addItem(item:ListItem): void {
        this._list.push(item);
        this.save()
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    removeItem(id:string): void {
        this._list = this._list.filter(l => l.id !== id);
        this.save()
    }

}