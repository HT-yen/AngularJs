import { Injectable } from '@angular/core';

@Injectable()

export class MyService{

	trainers: any;

	constructor() {
		this.trainers = [
      {  
        avatar: 'https://i.pinimg.com/236x/e5/d4/57/e5d4574a74b4ed21881f9655543ed078--chibi-fanart.jpg',
        name: 'HTY', 
        birthday: '10/1/1996', 
        team: 'android'
      },{
          name: 'TKD',  
          birthday: '', 
          team: 'game'
      },{
          name: 'TKD',  
          birthday: '', 
          team: 'game'
      }
     ];
	}
	getItem(i: number){

	}
	getAll(){
		return this.trainers;
	}
}