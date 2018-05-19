import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

import { HelpDetailsComponent } from './help-details/help-details.component';
import {TutorRegisterComponent} from "./tutor-register/tutor-register.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate:[ AuthGuard ] },
  { path: 'signin', component: AuthComponent },
  { path: 'tutorCadastro', component: TutorRegisterComponent}
];

const childRoutes: Routes = [
  { path: '',  component: HomeComponent, canActivate:[ AuthGuard ], children: [
      { path: 'helpDetails/:id', component: HelpDetailsComponent }
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
