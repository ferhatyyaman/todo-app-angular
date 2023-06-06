export class Model{
    user;
    items;

    constructor(){
        this.user = "User";
        this.items= [
                    new TodoItem("spor",false),
                    new TodoItem("kahvaltı",false),
                    new TodoItem("ders",true),
          ];
    }
}

export class TodoItem{
    description;
    state;
    constructor(description:string,state:boolean){
        this.description=description;
        this.state=state;
    }
}