import { Component, OnInit } from '@angular/core';
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
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent implements OnInit{
  constructor(private authService: AuthService) {}
  
  postFeeds: IPost[] = [];

  ngOnInit(): void {
    this.authService.getPostFeeds().subscribe((data) => {
      this.postFeeds = [data];
    });
  }
}
