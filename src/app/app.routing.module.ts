import { WelcomeComponent } from './home/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AskHelpComponent } from './home/ask-help/ask-help.component';
import { AuthGuard } from './auth/auth.guard';
import {SignupComponent} from "./signup/signup.component";

import { HelpDetailsComponent } from './help-details/help-details.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ErrorComponent } from './error/error.component';
import { RankUsersComponent } from './rank-users/rank-users.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home/0', pathMatch: 'full' },
  { path: 'signin', component: AuthComponent },
  { path: 'signup', component: SignupComponent}];

const childRoutes: Routes = [
    { path: '',  component: HomeComponent, canActivate:[ AuthGuard ], children: [
        { path: 'home/:page', component: TimelineComponent },
        { path: 'help_details/:id', component: HelpDetailsComponent },
        { path: 'ask_for_help', component: AskHelpComponent },
        { path: 'welcome/:authorID', component: WelcomeComponent },
        { path: 'user_details/:id', component: UserDetailsComponent},
        { path: 'rank_users', component: RankUsersComponent },
        { path: 'not_found', component: ErrorComponent}
    ] },
    { path: '**', redirectTo: '/home/0'}
]

@NgModule({
  imports: [
  RouterModule.forRoot(appRoutes),
    RouterModule.forChild(childRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
