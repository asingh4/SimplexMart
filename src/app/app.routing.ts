import { Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { AppComponent } from './app.component';

export const route : Routes = [
    {path : "homepage",component : AppComponent},
    {path : "failed",component : LoginComponent}
];