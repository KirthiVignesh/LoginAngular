import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent {

// }


export class LoginComponent {
  loginFormEmail: FormGroup;
  constructor(     private router: Router,) {
    this.loginFormEmail = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(8)])
    });
  }
  hide = true;

  onSubmit(){
    this.router.navigate(['/home']);
  }
  getErrorMessage() {
    if (this.loginFormEmail.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginFormEmail.get('email')?.hasError('email') ? 'Not a valid email':" ";
  }
  getErrorMessagePassword(){
    return this.loginFormEmail.get('password')?.hasError('minLength') ? "Minimum length of password is 8":"Minimum length of password is 8";

  }
}