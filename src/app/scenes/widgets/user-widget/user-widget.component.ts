import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BASE_URL } from 'src/app/api/config';

interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picturePath: string;
  friends: string[];
  location: string;
  occupation: string;
  viewedProfile: number;
  impressions: number;
  messages: any[];
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.css'],
})
export class UserWidgetComponent implements OnInit, OnChanges {
  BASE_URL = BASE_URL;
  user: IUser = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    createdAt: '',
    updatedAt: '',
    password: '',
    picturePath: '',
    friends: [],
    location: '',
    occupation: '',
    viewedProfile: 0,
    impressions: 0,
    messages: [],
  }

  constructor(private authService: AuthService) {}
  @Input() userId: string = '';

  ngOnInit(): void {
    this.authService.getUser(this.userId).subscribe((data) => {
      this.user = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userId']) {
      this.authService.getUser(changes['userId'].currentValue).subscribe((data) => {
        this.user = data;
      });
    }
  }

  viewProfile: any = {};
}
