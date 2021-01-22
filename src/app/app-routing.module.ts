import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/Views/login/login.component';
import { HomeComponent } from '../app/Views/home/home.component';
import { RegisterComponent } from '../app/Views/register/register.component';
import { ProfileComponent } from '../app/Views/profile/profile.component';
import { TrackingComponent } from '../app/Views/tracking/tracking.component';
import { AddFamilyCarComponent } from './Views/add-family-car/add-family-car.component';
import { AdminGuard } from './Helper/admin.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [ AdminGuard ]
  },
  {
    path: 'FamilyCar', component: AddFamilyCarComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'FamilyCar/:id', component: AddFamilyCarComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'tracking', component: TrackingComponent,
    canActivate: [AdminGuard]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
