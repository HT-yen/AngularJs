import { Component ,OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'form-root',
  templateUrl: './app.form.component.html',
  styleUrls: ['./app.component.css']
})
export class AppFormComponent {
  @Output() result: EventEmitter<any> = new EventEmitter();
  name: string;

  constructor(){

  }

  ngOnInit(){

  }

  newMember(){
    this.result.emit(this.name);
  }



  /*
  show :any;
  newMem: any;
  name: string;
  // newMem: any;
  // show: any;

  constructor(){
    
  }

  addMember(){
    this.show= document.getElementById("show");
    this.newMem = document.createElement('li');
    var span = document.createElement('span');
    span.innerHTML = this.name;
    this.newMem.appendChild(span);
    var del = document.createElement('button');
    del.innerHTML = `delete`;
    this.newMem.appendChild(del);
    this.show.appendChild(this.newMem);
    del.addEventListener(`click`, (e)=>{
           var currentNode = e.target;
           this.deleteButton(currentNode);
    });
    }
    deleteButton(currentNode){
          var parentDel = currentNode.parentNode;
           
          // alert(parentDel);
          console.log(parentDel);
           
          this.show.removeChild(parentDel);
    }
    */

}