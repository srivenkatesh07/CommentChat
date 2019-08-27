import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoglistService } from '../loglist.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogExanpleComponent } from '../dialog-example/dialog-exanple.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    user_name: new FormControl(null, [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
    password: new FormControl(null, [Validators.required])
  });
  logindata = {}
  constructor(public dialog: MatDialog, private router: Router, private LoglistService: LoglistService) { }

  ngOnInit() {
  }


  login() {
    if (!this.loginForm.controls.user_name.valid) {
      this.dialog.open(DialogExanpleComponent, { data: { Error: "Please enter a valid Email address" } });
      return;
    }
    else if (!this.loginForm.controls.password.valid) {
      this.dialog.open(DialogExanpleComponent, { data: { Error: "Password is mandatory " } });
      return;
    }
    else {
      this.LoglistService.login(this.logindata)
        .subscribe(
          res => {
            console.log(res)

            localStorage.setItem('token', JSON.stringify(res));
            this.router.navigateByUrl('/homepage');
          }
          ,
          err => {

            this.dialog.open(DialogExanpleComponent, { data: { Error: "The Email and Password you specified are invalid. Please try again." } });


            console.log(err);
          });
    }
  }
}


