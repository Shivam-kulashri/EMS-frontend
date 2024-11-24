import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [

    {
        path: '', component:DashboardPageComponent
    },

    {
        path: 'sign-up', component: SignupComponent
    },

    {
        path: 'login', component: LoginComponent
    }

];
