import { Component } from '@angular/core';

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.css'],
})
export class UserWidgetComponent {
  viewProfile: any = {};

  user = {
    firstName: 'John',
    lastName: 'Doe',
    profilePicture: 'https://dummyimage.com/200x200/000/fff',
    coverPhoto: 'https://dummyimage.com/600x200/000/fff',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    friends: ['Jane', 'Bob', 'Alice'],
    location: 'New York, NY',
    occupation: 'Software Engineer',
    viewedProfile: 2304,
    impressions: 5405,
  };
}
