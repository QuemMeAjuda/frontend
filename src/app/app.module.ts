import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { DesignModule } from './design.module';

import { environment } from '../environments/environment';

import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';

import { UserService } from "./service/user.service";
import { AuthComponent } from './auth/auth.component';
import { AuthGuard} from './auth/auth.guard';
import { AuthService } from './service/auth.service';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AskHelpComponent } from './home/ask-help/ask-help.component';
import { TutorRegisterComponent } from './tutor-register/tutor-register.component';
import { HelpDetailsComponent } from './help-details/help-details.component';
import { HelpService } from './service/help.service';
import { TimelineComponent } from './home/timeline/timeline.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { UploadComponent } from './upload/upload.component';
import { DropZoneDirective } from './upload/drop-zone.directive';
import { FileSizePipe } from './upload/file-size.pipe';
// AngularFire2 Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MockSystemComponent } from './mock-system/mock-system.component';
import { DialogOverviewExampleDialog } from './help-details/help-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';

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
    WelcomeComponent,
    UploadComponent,
    DropZoneDirective,
    FileSizePipe,
    MockSystemComponent,
    DialogOverviewExampleDialog,
    UserDetailsComponent
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
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  entryComponents: [HomeComponent, DialogOverviewExampleDialog],
  providers: [AuthService, AuthGuard,UserService, HelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
