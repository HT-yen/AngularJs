import { Component} from '@angular/core';
import { FormsModule, FormBuilder, FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'form-root',
  templateUrl: './app.form.component.html',
  styleUrls: ['./app.form.component.css']
})
export class AddFormComponent {
  public addForm: FormGroup;
  trainers: Array<{'avatar', 'name', 'birthday', 'joined', 'team'}>[];
  team: any;
  constructor(private _form_bd: FormBuilder) {
    this.trainers = [];
    this.team = [
      'PHP',
      'FE',
      'Game'
    ];
  }

  ngOnInit() {
    this.addForm = this._form_bd.group({
      personal: this._form_bd.group({
        avatar: [],
        name: ['',Validators.required],
        birthday: []
      }),
      company: this._form_bd.group({
        team: ['', Validators.required],
        joined:  new FormControl('')
      }),
      skill: []
    });

    this.addForm.controls.company.get('team').valueChanges.subscribe(
    (val: string) => {
      if (val === "PHP") {
          this.addForm.patchValue({
            skill: 'HTML', 
          })
      } else if (val === "FE") {
            this.addForm.patchValue({
            skill: 'JS', 
            })
      } else if (val === "Game") {
            this.addForm.patchValue({
            skill: 'JAVA', 
            })
      }
    });
  }

//this.addForm.value['personal']['avatar'] == this.addForm.controls.company.get('team').value
  add(addForm: FormGroup) {
    this.trainers.push(
      addForm.value
    );
  }

  edit( mem: any) {
     (<FormGroup>this.addForm).setValue(mem, { onlySelf: true });
  }

  delete (i: number) {
    this.trainers.splice(i, 1);
  }
}