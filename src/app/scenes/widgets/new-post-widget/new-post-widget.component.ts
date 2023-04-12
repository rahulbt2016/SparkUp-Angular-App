import { Component, Input, SimpleChanges } from '@angular/core';
import { BASE_URL } from 'src/app/api/config';
import { AuthService } from 'src/app/services/auth.service';
import { FileUploader } from 'ng2-file-upload';

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
  selector: 'app-new-post-widget',
  templateUrl: './new-post-widget.component.html',
  styleUrls: ['./new-post-widget.component.css'],
})
export class NewPostWidgetComponent {
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
  };

  constructor(private authService: AuthService) {}
  @Input() userId: string = '';

  ngOnInit(): void {
    this.authService.getUser(this.userId).subscribe((data) => {
      this.user = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userId']) {
      this.authService
        .getUser(changes['userId'].currentValue)
        .subscribe((data) => {
          this.user = data;
        });
    }
  }

  showDropbox = false;

  toggleDropbox() {
    this.showDropbox = !this.showDropbox;
  }

  public uploader: FileUploader = new FileUploader({
    url: `${BASE_URL}/public/assets`,
  });

  public file: File | undefined;

  public setImage(file: File): void {
    this.file = file;
    console.log(file); // or do something else with the file
  }

  public resetFileInput(): void {
    this.file = undefined;
    const inputElement = document.querySelector(
      'ngx-dropzone input[type="file"]'
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = '';
    }
  }

  description: string = '';

  setPost(value: string) {
    this.description = value;
    console.log(this.description);
  }

  handlePost() {
    console.log(this.description);
    this.authService
      .createPost(this.user._id, this.description, this.file?.name)
      .subscribe(
        (response) => {
          console.log(response);
          // Reload the page after successful post creation
          location.reload();
        },
        (error) => {
          console.log(error);
          // handle error
        }
      );
  }
}
