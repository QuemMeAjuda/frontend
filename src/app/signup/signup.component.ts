import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordValidation} from "./passwordValidation.component";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  protected form: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private userService : UserService,
              private router : Router,
              private authService : AuthService) { }

  ngOnInit() {
    this.formInitialization()
  }

  formInitialization(){
    this.form = this._formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null],
      email: [null, Validators.required],
      university: [null, Validators.required],
      graduation: [null, Validators.required]
      });
  }

  isValidForm() {
    return this.form.valid;
  }

  onSubmit(){
    let fore = this.form.value;
    var data = {
      name: fore.firstName + ' ' + fore.lastName,
      email: fore.email,
      university: fore.university,
      graduation: fore.graduation,
      uid : this.authService.getCurrentUser().info['uid']
    }

    this.userService.postUser(data).subscribe(
      res=> console.log(res),
        err => console.log(err));
    this.router.navigate(['/']);
  }

}
