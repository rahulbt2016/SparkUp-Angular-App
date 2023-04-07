import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}
  showError: boolean = false;

  onLogin(form: NgForm) {
    this.authService
      .login(form.value.email!, form.value.password!)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.showError = false;
          this.router.navigateByUrl('home');
        },
        error: (e) => {
          console.log(e);
          this.showError = true;
          //this.errorMessage = e.error.msg;
        },
        complete: () => {
          console.log('complete');
        },
      });
    //form.reset();
  }
}
