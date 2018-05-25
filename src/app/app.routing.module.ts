import { WelcomeComponent } from './home/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AskHelpComponent } from './home/ask-help/ask-help.component';
import { AuthGuard } from './auth/auth.guard';
import {SignupComponent} from "./signup/signup.component";

import { HelpDetailsComponent } from './help-details/help-details.component';
import {TutorRegisterComponent} from "./tutor-register/tutor-register.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: AuthComponent }
  ];

const childRoutes: Routes = [
    { path: '',  component: HomeComponent, canActivate:[ AuthGuard ], children: [
        { path: 'help_details/:id', component: HelpDetailsComponent },
        { path: 'ask_for_help', component: AskHelpComponent },
        { path: 'welcome', component: WelcomeComponent }
    ] },
    { path: '**', redirectTo: '/'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(childRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
