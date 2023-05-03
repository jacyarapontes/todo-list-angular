  import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-ttens',
  templateUrl: './todo-input-add-ttens.component.html',
  styleUrls: ['./todo-input-add-ttens.component.scss']
})
export class TodoInputAddTtensComponent implements OnInit {

  @Output() public emitIemTaskList = new EventEmitter();

  public addItemTaskList: string = "";
  constructor(){}

  ngOnInit(): void {
    
  }
  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList){
      this.emitIemTaskList.emit(this.addItemTaskList);
    this.addItemTaskList = "";

    }
    
    
  }

}
