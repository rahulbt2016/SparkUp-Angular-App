import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BASE_URL } from 'src/app/api/config';

interface IFriend {
  _id: string;
  firstName: string;
  lastName: string;
  occupation: string;
  picturePath: string;
}

@Component({
  selector: 'app-friendlist-widget',
  templateUrl: './friendlist-widget.component.html',
  styleUrls: ['./friendlist-widget.component.css']
})
export class FriendlistWidgetComponent implements OnInit {

  BASE_URL = BASE_URL;

  constructor(private authService: AuthService) {}
  friendList: IFriend[] = [];
  userId = localStorage.getItem('userId');

  ngOnInit(): void {
    this.authService.getFriendList(this.userId).subscribe((data) => {
      this.friendList = data;
    });
  }

  navigateToProfile(id: string) {
    
  }

  patchFriend(id: string) {

  }

}

