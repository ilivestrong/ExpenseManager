import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ExpenseGroupComponent } from '../expense/expense-group/expense-group.component';
import { ExpenseSheetComponent } from '../expense/expense-sheet/expense-sheet.component';
import { RouterModule } from '@angular/router/';

import { appRoutes } from './app.routes'
import { UserModule } from '../user/user.module';
import { ExpensesModule } from '../expense/expense.module';
import { NotFound404 } from './404';
import { NavbarComponent } from '../navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule, MatIconModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    NotFound404,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UserModule,
    ExpensesModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
