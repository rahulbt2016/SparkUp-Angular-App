import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BASE_URL } from 'src/app/api/config';
import { Router } from '@angular/router';

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
  @Input() userId = '';

  constructor(private authService: AuthService, private router: Router) {}
  friendList: IFriend[] = [];

  ngOnInit(): void {

    let filterUserId = (this.userId==='') ? localStorage.getItem('userId') : this.userId;
    this.authService.getFriendList(filterUserId).subscribe((data) => {
      this.friendList = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userId']) {
      let filterUserId = (this.userId==='') ? localStorage.getItem('userId') : this.userId;
      this.authService.getFriendList(filterUserId).subscribe((data) => {
        this.friendList = data;
      });
    }
  }

  navigateToProfile(id: string) {
    this.router.navigate(['/profile', id]); 
  }

  patchFriend(id: string) {

  }

}