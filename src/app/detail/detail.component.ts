import { Component, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyService} from '../service/myService';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'article-details',
  templateUrl: 'detail.component.html',
})
export class DetailComponent {
  id: number;
  @Input() sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private _MyService: MyService) {
    this.sub = [];
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.sub = this._MyService.getAll().
        subscribe(
          data => {
            this.sub = data[this.id];
          },
          err =>
            console.log("error, error code: %s, URL: %s", err.status, err.url),
            () => console.log("sucsessful")
        );
      console.log(this.sub.title);
      if (this.sub == null)
        this.router.navigate(['article']);
    });
  }
}