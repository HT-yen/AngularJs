import { Component ,OnInit, Output, Input, EventEmitter} from '@angular/core';
import { MyService} from '../service/myService';
import { ActivatedRoute, Router } from '@angular/router';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'list-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() trainers: any;

  constructor(private route: ActivatedRoute, private _MyService: MyService){

  }

  ngOnInit(){
    this._MyService.getAll().
      subscribe(
          data => {
            this.trainers = data;
          },
          err =>
            console.log("error, error code: %s, URL: %s", err.status, err.url),
            () => console.log("sucsessful")
        );
  }

}