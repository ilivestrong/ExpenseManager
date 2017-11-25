import { NgModule } from "@angular/core/";
import { ExpenseGroupComponent } from "./expense-group/expense-group.component";
import { ExpenseSheetComponent } from "./expense-sheet/expense-sheet.component";
import { RouterModule } from "@angular/router/";
import { expenseRoutes } from "./expense.routes";

@NgModule(
    {
        imports: [
            RouterModule.forChild(expenseRoutes)
        ],
        declarations: 
        [
            ExpenseGroupComponent,
            ExpenseSheetComponent
        ],
        providers: []
    }
)

export class ExpensesModule {}