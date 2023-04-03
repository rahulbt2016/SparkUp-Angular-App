import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './scenes/chat/chat.component';
import { HomePageComponent } from './scenes/home-page/home-page.component';
import { LoginPageComponent } from './scenes/login-page/login-page.component';
import { NavbarComponent } from './scenes/navbar/navbar.component';
import { ProfilePageComponent } from './scenes/profile-page/profile-page.component';
import { RegisterPageComponent } from './scenes/register-page/register-page.component';
import { UserWidgetComponent } from './scenes/widgets/user-widget/user-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomePageComponent,
    LoginPageComponent,
    NavbarComponent,
    ProfilePageComponent,
    RegisterPageComponent,
    UserWidgetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
