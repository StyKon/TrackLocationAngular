import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { TokenService } from '../../Services/token.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserModule } from '../../Models/user/user.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean;
  LoginForm: FormGroup;
  user: Observable<UserModule>;
  constructor(private authService: AuthService, private tokenStorage: TokenService,
              private router: Router , private fb: FormBuilder) {
                this.LoginForm = this.fb.group({
                  Email: [''],
                  Password: ['']
                 });
              }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.user = this.tokenStorage.getUser();
    }else{
    this.isLoggedIn = false;
    this.LoginForm = this.fb.group({
      Email: ['', Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      Password: ['', Validators.required]
    });
   }
  }

  onSubmit(): void {
    this.Login();
  }

  Login(): void{
    this.authService.signIn(this.LoginForm.value);
  }
  reloadPage(): void {
    window.location.reload();
    this.router.navigate(['Profile']);
  }
  get Email(){
    return this.LoginForm.get('Email');
  }
  get Password(){
    return this.LoginForm.get('Password');
  }

}
