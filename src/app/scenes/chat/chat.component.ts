import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BASE_URL } from 'src/app/api/config';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
interface Friend {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  picturePath: string;
}

interface MessageReceive {
  _id: string;
  messageKey: string;
  sender: string;
  receiver: string;
  text: string;
  time: string;
  __v: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) { }

  friends: Friend[] = [];

  selectedUser: Friend | undefined;
  messageReceive: MessageReceive[] = []
  userID: string | null = '';
  userEmail: string | null = '';
  shouldRerender: boolean = false;

  loggedInUser: IUser = {
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

  messageForm = new FormGroup({
    message: new FormControl('', Validators.required)
  });

  ngOnInit(): void {

    this.userID = localStorage.getItem('userId')
    this.userEmail = localStorage.getItem('userEmail')

    this.authService.getUser(this.userID).subscribe((data) => {
      this.loggedInUser = data;
      console.log("Inside loggedInUser", this.loggedInUser)

    });
    
    console.log("loggedInUser", this.loggedInUser)
    this.authService.getFriendList(this.userID).subscribe((data) => {
      this.friends = data;
    });
    console.log("friends", this.friends)

    // polling 
    setInterval(() => {
      this.authService.fetchChat(this.userEmail,this.selectedUser?.email).subscribe((data) => {
        this.messageReceive = data;
      });
    }, 500);
  }
  // ngOnDestroy(): void {
  //   // Clean up the timer using clearInterval()
  //   clearInterval(this.timer);
  // }

  handleUserSelect(friend: Friend) {
    this.selectedUser = friend;
    console.log("selectedUser", this.selectedUser)

    this.authService.fetchChat(localStorage.getItem('userEmail'), this.selectedUser?.email).subscribe((data) => {
      this.messageReceive = data;
     
      // this.cdr.detectChanges();
    });
    console.log("messageReceive", this.messageReceive)


  }
  sendMessage() {
    console.log("in sendMessage")
    this.authService.sendChat(this.userEmail, this.selectedUser?.email, this.messageForm.value.message).subscribe((data) => {
      console.log(data)

    });

    this.messageForm.reset();

    this.authService.fetchChat(localStorage.getItem('userEmail'), this.selectedUser?.email).subscribe((data) => {
      this.messageReceive = data;    
    });
  
  }

}
