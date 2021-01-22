import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../Services/token.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  TokenValue: any;
  UserID: any;

  constructor(private token: TokenService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.TokenValue = this.token.getToken();
    this.UserID = this.token.getUserId();
  }
}
