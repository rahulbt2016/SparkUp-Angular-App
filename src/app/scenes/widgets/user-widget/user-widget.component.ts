import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BASE_URL } from 'src/app/api/config';

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.css'],
})
export class UserWidgetComponent implements OnInit, OnChanges {
  BASE_URL = BASE_URL;
  user: any;
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
