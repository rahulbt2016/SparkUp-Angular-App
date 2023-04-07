import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BASE_URL } from 'src/app/api/config';

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.css'],
})
export class UserWidgetComponent implements OnInit {
  BASE_URL = BASE_URL;
  user: any;
  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    this.authService.getUser(userId).subscribe((data) => {
      this.user = data;
    });
  }

  viewProfile: any = {};
}
