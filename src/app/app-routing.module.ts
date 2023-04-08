import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './scenes/chat/chat.component';
import { HomePageComponent } from './scenes/home-page/home-page.component';
import { LoginPageComponent } from './scenes/login-page/login-page.component';
import { RegisterPageComponent } from './scenes/register-page/register-page.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthReverseGuard } from './auth/auth-reverse.guard';
import { ProfilePageComponent } from './scenes/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [AuthReverseGuard] },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterPageComponent, canActivate: [AuthReverseGuard] },
  { path: 'profile/:userId', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
