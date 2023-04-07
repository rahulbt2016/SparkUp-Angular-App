import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './scenes/chat/chat.component';
import { HomePageComponent } from './scenes/home-page/home-page.component';
import { LoginPageComponent } from './scenes/login-page/login-page.component';
import { NavbarComponent } from './scenes/navbar/navbar.component';
import { ProfilePageComponent } from './scenes/profile-page/profile-page.component';
import { RegisterPageComponent } from './scenes/register-page/register-page.component';
import { UserWidgetComponent } from './scenes/widgets/user-widget/user-widget.component';
import { NewPostWidgetComponent } from './scenes/widgets/new-post-widget/new-post-widget.component';
import { HttpClientModule } from '@angular/common/http';

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
    NewPostWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
