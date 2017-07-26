import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppFormComponent } from './form/app.form.component';
import { AppListComponent } from './list/app.list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    AppListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
