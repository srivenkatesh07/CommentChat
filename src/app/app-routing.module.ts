import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'homepage',component:HomepageComponent,canActivate:[AuthGuard]},];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
