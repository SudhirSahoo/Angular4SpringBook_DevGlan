import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Login/login.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'dashboard', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: LoginComponent,
        data: { title: 'Login' }
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
