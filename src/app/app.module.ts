import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatBadgeModule} from '@angular/material/badge'; 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { MatCardModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { LoglistService } from './loglist.service';
import { UserdatalistService } from './userdatalist.service';
import {TokenInterceptorService} from './token-interceptor.service';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatNativeDateModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogExanpleComponent } from './dialog-example/dialog-exanple.component'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    DateAgoPipe,
    DialogExanpleComponent,
    
  ],
  entryComponents:[DialogExanpleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,MatDialogModule,
    MatExpansionModule,MatDatepickerModule,
    FormsModule,ReactiveFormsModule,MatRadioModule,MatNativeDateModule,
    MatBadgeModule,MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule,MatSnackBarModule,
  ],
  providers: [AuthGuard,LoglistService,UserdatalistService ,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
