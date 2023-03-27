import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './scenes/chat/chat.component';
import { HomePageComponent } from './scenes/home-page/home-page.component';
import { LoginPageComponent } from './scenes/login-page/login-page.component';
import { NavbarComponent } from './scenes/navbar/navbar.component';
import { ProfilePageComponent } from './scenes/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomePageComponent,
    LoginPageComponent,
    NavbarComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
