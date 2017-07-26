import { Component, ViewChild,OnInit, AfterContentInit} from '@angular/core';
import { AppListComponent } from './list/app.list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  members: Array<string>; 
  @ViewChild(AppListComponent) listcomp: AppListComponent;
  constructor(){
  	this.members =[];

  }
  ngOnInit(){
  	console.log(this.listcomp.data);
  	this.members.push("AA");
  }
  pushMember(txt: any){
  	this.members.push(txt);
  	this.listcomp.data =this.members;
  }
}
