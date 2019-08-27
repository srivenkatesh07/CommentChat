import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoglistService } from './loglist.service';
import { DialogExanpleComponent } from './dialog-example/dialog-exanple.component';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(public dialog: MatDialog, private LoglistService: LoglistService, private router: Router) { }

  canActivate(): boolean {
    if (this.LoglistService.loggedin()) {
      return true;
    } else {
      this.dialog.open(DialogExanpleComponent, { data: { Error: "You are not logged in. Please login" } });
      this.router.navigate(['/login'])
      return false
    }
  }
}
