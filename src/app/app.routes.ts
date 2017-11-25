import { Routes } from '@angular/router'
import { NotFound404 } from './404';

const appRoutes: Routes = [
    { path: "**", component: NotFound404, pathMatch: 'full' },
    { path: 'expense', loadChildren: 'src/expense/expense.module#ExpenseModule' },
    { path: 'user', loadChildren: 'src/user/user.module#UserModule' }
];

export { appRoutes }