import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    location: new FormControl(''),
    occupation: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    const formData = this.registerForm.value;
    this.authService.register(formData).subscribe(
      (response) => {
        console.log(response);
        alert('User Registered!');
        this.router.navigateByUrl('');
      },
      (error) => {
        console.error(error);
        alert('Registration failed. Please try again.');
      }
    );
  }
}
