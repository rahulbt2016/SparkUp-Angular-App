import { Component, OnInit, Input } from '@angular/core';
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

@Component({
  selector: 'app-posts-widget',
  templateUrl: './posts-widget.component.html',
  styleUrls: ['./posts-widget.component.css'],
})
export class PostsWidgetComponent implements OnInit {
  constructor(private authService: AuthService) {}

  @Input() userId: string = '';

  postFeeds: IPost[] = [];

  ngOnInit(): void {
    this.authService.getPostFeeds().subscribe((data) => {
      this.postFeeds = data;
    });
  }
}
