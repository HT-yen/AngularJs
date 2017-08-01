import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppListComponent } from './list/app.list.component';
import { AppDetailComponent } from './detail/app.detail.component';
import { EmptyDirective } from './directive/empty.directive';
import { MyService } from './service/my.service';
import { ImagePipe } from './pipe/image';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    ImagePipe,
    AppDetailComponent,
    EmptyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
