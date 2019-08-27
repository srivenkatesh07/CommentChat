import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoglistService } from '../loglist.service';
import { MatDialog } from '@angular/material';
import { DialogExanpleComponent } from '../dialog-example/dialog-exanple.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    user_name: new FormControl(null, [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    re_password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    phone_no: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]),
    dob: new FormControl(null, Validators.required)
  })
  constructor(public dialog: MatDialog, private router: Router, private LoglistService: LoglistService) { }

  ngOnInit() {
  }


  signup() {
   
  if (!this.signupForm.controls.user_name.valid) {
      this.dialog.open(DialogExanpleComponent, { data: { Error: "Please enter a valid Email address" } });
      return;
    }
    else if (!this.signupForm.controls.password.valid || !this.signupForm.controls.re_password.valid) {
      this.dialog.open(DialogExanpleComponent, { data: { Error: "Password must be at least 8 characters " } });
      return;
    }
    else if (this.signupForm.controls.password.value != this.signupForm.controls.re_password.value) {
      this.dialog.open(DialogExanpleComponent, { data: { Error: "Your password and confirm password do not match" } });
      return;
    }
    else if (!this.signupForm.controls.phone_no.valid) {
      this.dialog.open(DialogExanpleComponent, { data: { Error: "Mobile number required 10 digits" } });
      return;
    }
    else if(!this.signupForm.valid){
      this.dialog.open(DialogExanpleComponent, { data: { Error: "All the fields are mandatory" } });

    }
    else {

      this.LoglistService.signup(JSON.stringify(this.signupForm.value))
        .subscribe(
          res => {
            console.log('data created');
            this.router.navigate(['/login']);
          },
          error => {

            console.error(error)}
        )

      // console.log(JSON.stringify(this.signupForm.value));
    }
  }



}
