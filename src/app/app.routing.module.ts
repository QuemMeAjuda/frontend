
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import {SignupComponent} from "./signup/signup.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate:[ AuthGuard ] },
    { path: 'signin', component: AuthComponent },
    { path: 'signup', component: SignupComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
