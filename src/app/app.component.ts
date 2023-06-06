import { Component } from '@angular/core';
import { Model, TodoItem} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'name';
  showUserName= false;
  model = new Model();
  isDisplay=false;

  getName(){
    return this.model.user;
  }

  getItems(){
    if(this.isDisplay){
      return this.model.items
    }
    return this.model.items.filter(item=>!item.state);
  }

  addItem(value: string){
    if(value!=""){
      this.model.items.push(new TodoItem(value,false));
    }
  }

    showName() {
    if (this.userName.trim() !== '') {
      this.showUserName = true;
    }
  }

  
}
