import {Component, OnInit } from '@angular/core';
import { MyService } from '../service/myService';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, FormControl, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent { 
  articleForm: any;
  id: number;
  private sub: any;
  mem: any
  img: any;

  constructor(private route: ActivatedRoute, private _MyService: MyService, private  formBuilder: FormBuilder ) {
    this.mem = {};
    this.articleForm = this.formBuilder.group({
      image: new FormControl(''),
      title: new FormControl(''),
      content: new FormControl(''),
      author: new FormControl('')
    });
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.mem = this._MyService.getItem(this.id);
    this.articleForm.controls.title.setValue(this.mem.title);
    this.articleForm.controls.content.setValue(this.mem.content);
    this.articleForm.controls.author.setValue(this.mem.author);
    this.img = this.mem.image;
  }

  edit(articleForm: FormGroup){
    
  }
}  