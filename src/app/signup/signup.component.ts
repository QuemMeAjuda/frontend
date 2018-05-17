import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordValidation} from "./passwordValidation.component";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  protected form: FormGroup;


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formInitialization()
  }

  formInitialization(){
    this.form = this._formBuilder.group({
      firstName: [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
      lastName: [null],
      email: [Validators.required],
      password: [Validators.required],
      confirmPassword: [Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword
    })
  }

  onSubmit(){
    console.log(this.form)
  }

}
