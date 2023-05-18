import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app/Main/app.component';
import { EmployeeListComponent } from './Main/Employee-List/Employee-List.component';
import { EmployeeDetailComponent } from './Main/Employee-Detail/Employee-Detail.component';
import { DataService } from './Main/Data.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
