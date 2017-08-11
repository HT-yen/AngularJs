import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { MyService } from './service/myService';
import { EditComponent } from './detail/edit.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
	{ path: 'article', component: ListComponent},
	{ path: 'article/:id', component: DetailComponent },
  { path: 'article/:id/edit', component: EditComponent }

];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
