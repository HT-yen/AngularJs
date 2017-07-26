import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list-root',
  templateUrl: './app.list.component.html',
  styleUrls: ['./app.component.css']
})
export class AppListComponent {
	@Input() data: any;
  constructor(){
    
  }
  ngOnInit(){

  }
}