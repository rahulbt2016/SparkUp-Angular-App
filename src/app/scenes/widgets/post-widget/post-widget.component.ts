import { Component, Input, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/api/config';
import { AuthService } from 'src/app/services/auth.service';

interface IPost {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  picturePath: string;
  userPicturePath: string;
  likes: { [key: string]: boolean };
  comments: string[];
  createdAt: string;
  updatedAt: string;
}

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
  selector: 'app-post-widget',
  templateUrl: './post-widget.component.html',
  styleUrls: ['./post-widget.component.css'],
})
export class PostWidgetComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUser(this.post.userId).subscribe((data) => {
      this.user = data;
      this.likeCount = Object.values(this.post.likes).filter(
        (like) => like === true
      ).length;
      this.isFriend =
        this.userId !== null && this.user.friends.includes(this.userId)
          ? true
          : false;
      this.isLiked =
        this.userId !== null && this.post.likes.hasOwnProperty(this.userId)
          ? true
          : false;
    });
  }

  @Input() post: IPost = {
    _id: '',
    userId: '',
    firstName: '',
    lastName: '',
    location: '',
    description: '',
    picturePath: '',
    userPicturePath: '',
    likes: {},
    comments: [],
    createdAt: '',
    updatedAt: '',
  };

  BASE_URL = BASE_URL;
  userId = localStorage.getItem('userId');
  isLiked = false;
  isFriend = false;
  likeCount = 0;
  isComments = false;
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
  };

  patchLike(): void {
    this.authService.patchLike(this.post._id, this.user._id).subscribe(() => {
      if (!this.isLiked) {
        this.likeCount++;
        this.isLiked = true;
      } else {
        this.likeCount--;
        this.isLiked = false;
      }
    });
  }

  setIsComments(isComments: boolean): void {
    this.isComments = isComments;
  }

  addFriend(): void {
    this.authService.patchFriend(this.userId, this.post.userId).subscribe(
      (response) => {
        // handle success case
        console.log(response);
        // Reload the page after successful post creation
        location.reload();
      },
      (error) => {
        // handle error case
        console.log(error);
      }
    );
  }
}
