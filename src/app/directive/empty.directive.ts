import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[emptyData]',
})

export class EmptyDirective {
  @Input() emptyData: any; 
  constructor(private el: ElementRef,private renderer: Renderer){}

  ngOnInit() {
    if(!this.emptyData){
      this.el.nativeElement.innerHTML = "Empty";
      this.el.nativeElement.className = "dataEmpty text-center";
    }
    else{
    this.el.nativeElement.innerHTML = this.emptyData;
    }
  }
}
