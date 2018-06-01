import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule, BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { DesignModule } from './design.module';

import { environment } from '../environments/environment';

import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';

import {UserService} from "./service/user.service";
import { AuthComponent } from './auth/auth.component';
import { AuthGuard} from './auth/auth.guard';
import { AuthService } from './service/auth.service';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AskHelpComponent } from './home/ask-help/ask-help.component';
import { TutorRegisterComponent } from './tutor-register/tutor-register.component';
import { HelpDetailsComponent } from './help-details/help-details.component';
import { HelpService } from './service/help.service';
import { TimelineComponent } from './home/timeline/timeline.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    SignupComponent,
    HomeComponent,
    AskHelpComponent,
    TutorRegisterComponent,
    HelpDetailsComponent,
    TimelineComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DesignModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
  ],
  entryComponents: [HomeComponent],
  providers: [AuthService, AuthGuard,UserService, HelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
