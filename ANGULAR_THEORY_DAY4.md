# Angular
##  Knowledge round-up
### Component
#### Briefly explain Event Binding in Angular?
 Event binding is a data binding from an element to a component. Data obtained from user actions such as keystrokes, mouse movements, clicks, and touches can be bound to component property using event binding. 
Example:
```javascript
import {Component} from '@angular/core';
@Component({
  selector: 'app-notification',
  template: `
	<div>
	  <button (click)="notify()">click</button>
	</div>
`
})
export class Counter {
  notify() {
    alert("you clicked!");
  }
}
```
** Briefly explain Data Binding in Angular?**
Data binding is one of the most powerful features of software development technologies. Data binding in Angular is the automatic synchronization between Model and the View. When the Model changes, the Views are automatically updated and vice-versa. 

The ways to bind the data in Angular.

* Interpolation
* One-way binding (unidirectional)
* Two-way binding
* Event binding
#### What are Event Emitters and how it works in Angular?
 **What are Event Emitters ?**
* An event can be described simply as a string with a corresponding callback. An event can be "emitted" (or in other words, the corresponding callback be called) multiple times or you can choose to only listen for the first time it is emitted

* ***EventEmitter*** is a class in angular framework. It can emits custom events by emit method. 
* It can be use in custom event binding. 

** How it work in Angular ?**
```
import {Component, EventEmitter, Input, Output} from '@angular/core'; 
```
And then in class exported 
```
@Output() eventClick: EventEmitter<any> = new EventEmitter();
```
With ```@Output()```  output variable. ```eventClick``` custom event name. 
Then we can using ```emit()``` method to emit  custom event binding.

#### Explain the life cycle hooks of Angular application?
A component has a lifecycle managed by Angular itself. Angular manages creation, rendering, data-bound properties etc. It also offers hooks that allow us to respond to key lifecycle events.
Here is the complete lifecycle hook interface inventory:

* `ngOnChanges` : called when an input binding value changes.
* `ngOnInit` : after the first `ngOnChanges`.
* `ngDoCheck` : after every run of change detection.
* `ngAfterContentInit ` : after component content initialized.
* `ngAfterContentChecked` :  after every check of component content.
* `ngAfterViewInit` : after component's view(s) are initialized.
* `ngAfterViewChecked` : after every check of a component's view(s).
* `ngOnDestroy` : just before the component is destroyed.

#### Explain the `ContentChild`, `ContentChildren` and write an example?
* The `@ViewChild` and `@ViewChildren` decorators provide access to the classe of child
component from the containing component.
* The `@ViewChild` is a decorator function that takes the name of a component class as its input and finds its selector in the template of the containing component to bind to.
When there are multiple embedded components in the template, we can also use `@ViewChildren`.
* `@ContentChild` and `@ContentChildren@` work the same way as the equivalent `@ViewChild` and `@ViewChildren`
* However, the key difference is that `@ContentChild` and `@ContentChildren` select from the projected content within the component. 
* `@ContentChild` and `@ContentChildren` queries will return directives existing inside the <ng-content></ng-content> element of your view, whereas @ViewChild and @ViewChildren only look at elements that are on your view template directly.

* Note that content children will not be set until `ngAfterContentInit`
component lifecycle hook.
#####Example
File child.component.ts

```
import {Input, Component} from '@angular/core';

@Component({
	selector: 'child1',
	template: '<p [ngModel]="name">Child, {{name}}!</p>'
})
export class Child {
  @Input() name: string;

  constructor() {}

 setName(newName: String) {
    this.name = newName;
  }
}

```

File child-list.component.ts

```
import {Component, ContentChild, ContentChildren, QueryList} from '@angular/core';
import {Child} from './child.component';

@Component({
	selector: 'child-list',
	template: '
    <div>
	    <ng-content></ng-content>
	  </div>
	  <button (click)="showAll()">ALL</button>
	  <button (click)="showFirst()">FIRST</button>'
})
export class ChildList implements AfterContentInit {
  @ContentChildren(Child) Children: QueryList<child>;
  @ContentChild('first') firstChild: Child;

  constructor() {}
  ngAfterContentInit() {
    this.onClickAll();
  }

  showAll() {
    this.Children.forEach( child => child.setName("new Name"));
  }

  showFirst() {
    this.firsttChild.setName("new Child");
  }
}

```

File app.component.ts

```
import {Component} from '@angular/core';

@Component({
	selector: 'app',
	template: '
	  <child-list>
	    <child></child>
	    <child></child>
	    <child></child>
	  </child-list>
})
export class App {
  constructor() {}
}

```
# Extra
### Briefly explain ElementRef in Angular? Write an example.
ElementRef is provides access to the underlying native element (DOM element).
Example:
file app.component.ts
```
import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  @ViewChild('name') nameElem: ElementRef;

  message() {
    alert(this.nameElem.nativeElement.value);
  }
}
```
file app.component.html
```
<div>
  <input type="text" #name>
  <button (click)="message()">Click</button>
</div>
```