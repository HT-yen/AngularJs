import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'list-root',
  templateUrl: './app.list.component.html',
  styleUrls: ['./app.component.css']
})
export class AppListComponent {
	@Input() data: any;
  @Output() resultAfterDelete: EventEmitter<any> = new EventEmitter<any>();
  constructor(){
  }
  ngOnInit(){

  }
  deleteMember(i: number){
    this.resultAfterDelete.emit(i);
  }

}