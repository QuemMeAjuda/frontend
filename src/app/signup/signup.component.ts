import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordValidation} from "./passwordValidation.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  protected form: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router) { }

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

  goToHome() {
    this._router.navigate(['/']);
  }

  onSubmit(){
    /**
     * TODO: Implement User registration service and link with backend
     */
  }

}
