import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()

export class MyService{

    trainers: any;

    constructor(private http: Http){}
    getItem(i: number){
      this.getAll().
        subscribe(
          data => {
            this.trainers = data;
          },
          err =>
            console.log("error, error code: %s, URL: %s", err.status, err.url),
            () => console.log("sucsessful")
        );
        return this.trainers[i];
    }
    getAll(){
        return this.http.get('./assets/trainers.json')
            .map((res) => res.json());
    }
}