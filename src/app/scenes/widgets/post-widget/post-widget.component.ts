import { Component, Input, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/api/config';

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
};

@Component({
  selector: 'app-post-widget',
  templateUrl: './post-widget.component.html',
  styleUrls: ['./post-widget.component.css']
})
export class PostWidgetComponent implements OnInit{

  ngOnInit(): void {
    this.likeCount = Object.values(this.post.likes).filter(like => like === true).length;
    this.isLiked = (this.userId !== null && this.post.likes.hasOwnProperty(this.userId)) ? true : false;
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
    updatedAt: ''
  };

  BASE_URL = BASE_URL;
  userId = localStorage.getItem('userId');
  isLiked = false;
  likeCount = 0;
  isComments = false;
  isFriend = false;

  patchLike(): void {
    
  }

  setIsComments(isComments: boolean): void {
    this.isComments = isComments;
  }
}
