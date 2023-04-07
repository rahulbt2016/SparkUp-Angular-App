import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './scenes/chat/chat.component';
import { HomePageComponent } from './scenes/home-page/home-page.component';
import { LoginPageComponent } from './scenes/login-page/login-page.component';
import { RegisterPageComponent } from './scenes/register-page/register-page.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterPageComponent },
  { path: 'profile', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
