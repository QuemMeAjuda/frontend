
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AskHelpComponent } from './home/ask-help/ask-help.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate:[ AuthGuard ] },
    { path: 'signin', component: AuthComponent },
    { path: 'ask_for_help', component: AskHelpComponent, canActivate:[ AuthGuard ] }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}