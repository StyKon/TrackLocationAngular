import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder ) {
     this.signupForm = this.fb.group({
      FirstName: [''],
      LastName: [''],
      Email: [''],
      Cin: [''],
      NumTel: [''],
      NumPassport: [''],
      Password: [''],
      TypeUser: [''],
     });

  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      FirstName: ['', Validators.required, Validators.minLength(3)],
      LastName: ['', Validators.required, Validators.minLength(3)],
      Email: ['', Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      Cin: ['', Validators.required, Validators.minLength(8)],
      NumTel: ['', Validators.required, Validators.pattern('^[0-9]+$')],
      NumPassport: ['', Validators.required],
      Password: ['', Validators.required],
      TypeUser: ['', Validators.required]
  });
  }
  onSubmit(): void {
    this.registerUser();
  }
  registerUser(): void{
     this.authService.register(this.signupForm.value);
  }

  get FirstName(){
    return this.signupForm.get('FirstName');
  }
  get LastName(){
    return this.signupForm.get('LastName');
  }
  get Email(){
    return this.signupForm.get('Email');
  }
  get Cin(){
    return this.signupForm.get('Cin');
  }
  get NumTel(){
    return this.signupForm.get('NumTel');
  }
  get NumPassport(){
    return this.signupForm.get('NumPassport');
  }
  get Password(){
    return this.signupForm.get('Password');
  }
   get TypeUser(){
    return this.signupForm.get('TypeUser');
  }
}
