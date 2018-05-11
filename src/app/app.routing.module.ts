
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'signin', component: AuthComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}