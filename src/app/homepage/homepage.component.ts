import { Component, OnInit } from '@angular/core';
import { LoglistService } from '../loglist.service';
import { UserdatalistService } from '../userdatalist.service';
import { commentsdata } from '../homepage/comments';
import { subcommentsdata } from './subcomments';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogExanpleComponent } from '../dialog-example/dialog-exanple.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  check:{};
  comments: commentsdata[];
  subcomments: subcommentsdata[];

  constructor(public dialog: MatDialog, public LoglistService: LoglistService, public UserdatalistService: UserdatalistService) { }

  commentform: FormGroup = new FormGroup({
    comment: new FormControl(null, Validators.required)

  });

  subcommentform: FormGroup = new FormGroup({
    subcomment: new FormControl(null, Validators.required)

  });

  subcommentdata = <any>{};
  commentdata = <any>{};

  submitcomment() {
    if (!this.commentform.valid) {
      this.dialog.open(DialogExanpleComponent, { data: { Error: "Comment Field cannot be empty" } });
    } else {
      this.UserdatalistService.getcurrentuser(localStorage.getItem('token'))
        .subscribe(
          res => {
            var username = Object.keys(res).map(e => res[e]);
            var comment = Object.keys(this.commentdata).map(e => this.commentdata[e]);
            const myObj = {
              user_name: username[1],
              comment: comment[0],
              date: new Date(),
              first_name: username[6],
              last_name: username[7]
            };

            this.UserdatalistService.commentdata(myObj)
              .subscribe(
                res => {
                  this.commentform.reset();
                  this.dialog.open(DialogExanpleComponent, { data: { Error: "Comment Updated Successfully" } });

                  this.UserdatalistService.usercommentDisplay().subscribe(res => { this.comments = <any>res },
                    err => {

                      console.log(err)

                    });
                  this.UserdatalistService.subusercommentDisplay().subscribe(res => { this.subcomments = <any>res },
                    err => {

                      console.log(err)

                    });
                 
                },
                err => {
                  console.log(err)
                });
          },
          err => {
            console.log(err)
          });

    }

  }

  likecount(id: any, first_name: any, like_count: any, comment: any) {
    const myObj = {
      id: id,
      first_name: first_name,
      like_count: like_count,
      comment: comment

    };
    this.UserdatalistService.getcurrentuser(localStorage.getItem('token'))
      .subscribe(
        res => {
          var username = Object.keys(res).map(e => res[e]);

          if (myObj.id != username[0] && myObj.first_name != username[6]) {
            this.UserdatalistService.likeupdate(myObj).subscribe(res => {

              this.UserdatalistService.usercommentDisplay().subscribe(res => { this.comments = <any>res },
                err => {

                  console.log(err)

                });
            
            });

          } else {
            this.dialog.open(DialogExanpleComponent, { data: { Error: "You cannot like your own post" } });

          }
        });


  }

  sublikecount(id: any, user_name: any, like_count: any, comment: any) {
    const myObj = {
      id: id,
      user_name: user_name,
      like_count: like_count,
      comment: comment

    };
    this.UserdatalistService.getcurrentuser(localStorage.getItem('token'))
      .subscribe(
        res => {
          var username = Object.keys(res).map(e => res[e]);

          if (myObj.id != username[0] && myObj.user_name != username[6]) {



            this.UserdatalistService.sublikeupdate(myObj).subscribe(res => {
              this.UserdatalistService.subusercommentDisplay().subscribe(res => { this.subcomments = <any>res },
                err => {

                  console.log(err)

                });
              
            });
          } else {
            this.dialog.open(DialogExanpleComponent, { data: { Error: "You cannot like your own post" } });
          }

        });
  }

  subcomment(id: any, comment_count: any, comment: any, first_name: any, postlast_name: any) {
    if (!this.subcommentform.valid) {
      this.dialog.open(DialogExanpleComponent, { data: { Error: "Comment Field cannot be empty" } });
    } else {

      this.UserdatalistService.getcurrentuser(localStorage.getItem('token'))
        .subscribe(
          res => {
            var username = Object.keys(res).map(e => res[e]);
            var subcomment = Object.keys(this.subcommentdata).map(e => this.subcommentdata[e]);
            const myObj = {
              postid: id,
              postuser_name: first_name,
              postlast_name: postlast_name,
              postcomment_count: comment_count,
              postcomment: comment,

              date: new Date(),
              user_name: username[6],
              last_name: username[7],
              comment: subcomment[0],
              id: username[0],

            };
            

            this.UserdatalistService.commentupdate(myObj).subscribe(res => { res });

            this.UserdatalistService.subcommentdata(myObj)
              .subscribe(
                res => {

                  this.subcommentform.reset();
                  this.dialog.open(DialogExanpleComponent, { data: { Error: "Comment Updated Successfully" } });

                  this.UserdatalistService.usercommentDisplay().subscribe(res => { this.comments = <any>res },
                    err => {

                      console.log(err)

                    });
                  this.UserdatalistService.subusercommentDisplay().subscribe(res => { this.subcomments = <any>res },
                    err => {

                      console.log(err)

                    });
                               this.dialog.open(DialogExanpleComponent, { data: { Error: "Comment Updated Successfully" } });

                },
                err => {
                  console.log(err)
                });


          

          },
          err => {
            console.log(err)
          });
    }
  }





  ngOnInit() {
    this.UserdatalistService.usercommentDisplay().subscribe(res => { this.comments = <any>res },
      err => {

        console.log(err)

      });

    this.UserdatalistService.subusercommentDisplay().subscribe(res => { this.subcomments = <any>res },
      err => {

        console.log(err)

      });

  }
}
