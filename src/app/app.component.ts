import { Component , } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  members: Array<string>; 
  constructor(){
  	this.members =[];

  }
  ngOnInit(){
  	this.members.push("AA");
  }

  pushMember(txt){
  	this.members.push(txt);
  }
}
