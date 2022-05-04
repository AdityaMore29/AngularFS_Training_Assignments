import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';
import { FriendsComponent } from './friends/friends.component';
import { ProductsComponent } from './products/products.component';
import { CalculateAmtComponent } from './calculate-amt/calculate-amt.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { SortOptionsComponent } from './sort-options/sort-options.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { GradesPipe } from './grades.pipe';
import { EmployeeGradesComponent } from './employee-grades/employee-grades.component';
import { RangePipe } from './range.pipe';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { FancyCardComponent } from './fancy-card/fancy-card.component';
import { FancyChildComponent } from './fancy-child/fancy-child.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { GetUsersComponent } from './get-users/get-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpComponent,
    FriendsComponent,
    ProductsComponent,
    CalculateAmtComponent,
    ProductListComponent,
    SortOptionsComponent,
    EmpListComponent,
    GradesPipe,
    EmployeeGradesComponent,
    RangePipe,
    DirectiveDemoComponent,
    FancyCardComponent,
    FancyChildComponent,
    RxjsDemoComponent,
    GetUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
