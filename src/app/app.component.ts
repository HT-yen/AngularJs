import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trainers: Array<any>;
  showmem: any;
  constructor(){
  	this.showmem=[];
  	this.trainers = [{avatar: 'https://i.pinimg.com/236x/e5/d4/57/e5d4574a74b4ed21881f9655543ed078--chibi-fanart.jpg',
     name: 'HTY', birthday: '10/1/1996', team: 'android'},
  					{name: 'TKD', birthday: '', team: 'game'}];
  }
  showDetail(i){
    this.showmem = null;
    setTimeout(()=>{
      this.showmem= this.trainers[i];
    });
  }
}
