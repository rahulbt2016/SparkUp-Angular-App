import { Component,  OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      window.scrollTo(0, 0);
    });
  }

  userId: string = '';
}
