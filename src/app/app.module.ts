import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { JarvisComponent } from './components/jarvis/jarvis.component';
import { AuthGuard } from './gaurds/auth.guard';
import { UserService } from './services/user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    JarvisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    {provide : HTTP_INTERCEPTORS, useClass : AuthGuard, multi:true},
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
