import { Component, ViewChild,OnInit, AfterContentInit } from '@angular/core';
import { MyService } from './service/my.service';
import { AppDetailComponent } from './detail/app.detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(AppDetailComponent) detacomp: AppDetailComponent;  
  constructor(){

  }

  showDetail (trainer: any) {
    this.detacomp.showmem = trainer; 
  }
}
