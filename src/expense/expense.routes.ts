import { Routes } from "@angular/router/";
import { ExpenseGroupComponent } from "./expense-group/expense-group.component";
import { ExpenseSheetComponent } from "./expense-sheet/expense-sheet.component";



export const expenseRoutes: Routes = [

    { path: 'expense', component: ExpenseGroupComponent },
    { path: 'expense/:id', component: ExpenseGroupComponent },
    { path: 'expensesheet', component: ExpenseSheetComponent },
    { path: 'expensesheet/:id', component: ExpenseSheetComponent }
];