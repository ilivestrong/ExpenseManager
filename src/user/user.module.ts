import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component'
import { RouterModule } from "@angular/router";

@NgModule(
    {
        declarations: [LoginComponent],
        imports: [
            RouterModule.forChild([
                { path: 'user', component: LoginComponent }
            ])
        ],
        providers: [],
        exports: []
    }
)
export class UserModule { }