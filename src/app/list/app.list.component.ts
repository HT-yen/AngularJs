import { Component ,OnInit, Output, Input, EventEmitter} from '@angular/core';
import { MyService} from '../service/my.service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'list-root',
  templateUrl: './app.list.component.html',
})
export class AppListComponent {
  @Output() result: EventEmitter<any> = new EventEmitter();
  @Input() trainers: any;

  constructor(private _MyService: MyService){

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

  showDetail(i :number){
    this.result.emit(this._MyService.getItem(i));
  }
}