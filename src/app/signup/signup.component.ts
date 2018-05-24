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
      firstName: [null, Validators.required],
      lastName: [null],
      email: [null, Validators.required],
      university: [null, Validators.required],
      graduation: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  isValidForm() {
    return this.form.valid;
  }

  onSubmit(){
    /**
     * TODO: Implement User registration service and link with backend
     */
  }

}
