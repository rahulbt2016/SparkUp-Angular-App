import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './scenes/chat/chat.component';
import { HomePageComponent } from './scenes/home-page/home-page.component';
import { LoginPageComponent } from './scenes/login-page/login-page.component';
import { RegisterPageComponent } from './scenes/register-page/register-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'profile', component: HomePageComponent },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
