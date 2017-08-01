import { Component ,OnInit, Output, Input, EventEmitter} from '@angular/core';
import { MyService} from '../service/my.service';

@Component({
  selector: 'list-root',
  templateUrl: './app.list.component.html',
})
export class AppListComponent {
  @Output() result: EventEmitter<any> = new EventEmitter();
  @Input() trainers: any;

  constructor(private _MyService: MyService){}

  ngOnInit(){
    this.trainers = this._MyService.getAll();
  }

  showDetail(i :number){
    this.result.emit(this.trainers[i]);
  }
}