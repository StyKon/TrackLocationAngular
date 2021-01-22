import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarModule } from './Models/car/car.module';
import { FamilyCarModule } from './Models/family-car/family-car.module';
import { LocationModule } from './Models/location/location.module';
import { TypeCarModule } from './Models/type-car/type-car.module';
import { UserModule } from './Models/user/user.module';
import { LoginComponent } from './Views/login/login.component';
import { RegisterComponent } from './Views/register/register.component';
import { HomeComponent } from './Views/home/home.component';
import { ProfileComponent } from './Views/profile/profile.component';
import { authInterceptorProviders } from './helper/auth.interceptor';

import { AgmCoreModule } from '@agm/core';
import { TrackingComponent } from './Views/tracking/tracking.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Views/navbar/navbar.component';
import { FooterComponent } from './Views/footer/footer.component';
import { ScrollebarComponent } from './Views/scrollebar/scrollebar.component';
import { ListeUsersComponent } from './Views/liste-users/liste-users.component';
import { AddUsersComponent } from './Views/add-users/add-users.component';
import { EditUsersComponent } from './Views/edit-users/edit-users.component';
import { ListeTrackingComponent } from './Views/liste-tracking/liste-tracking.component';
import { AddCarComponent } from './Views/add-car/add-car.component';
import { ListeCarComponent } from './Views/liste-car/liste-car.component';
import { EditCarComponent } from './Views/edit-car/edit-car.component';
import { AddFamilyCarComponent } from './Views/add-family-car/add-family-car.component';
import { ListFamilyCarComponent } from './Views/list-family-car/list-family-car.component';
import { AddTypeCarComponent } from './Views/add-type-car/add-type-car.component';
import { ListTypeCarComponent } from './Views/list-type-car/list-type-car.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    TrackingComponent,
    NavbarComponent,
    FooterComponent,
    ScrollebarComponent,
    ListeUsersComponent,
    AddUsersComponent,
    EditUsersComponent,
    ListeTrackingComponent,
    AddCarComponent,
    ListeCarComponent,
    EditCarComponent,
    AddFamilyCarComponent,
    ListFamilyCarComponent,
    AddTypeCarComponent,
    ListTypeCarComponent
  ],
  imports: [
    UserModule,
    TypeCarModule,
    LocationModule,
    FamilyCarModule,
    CarModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYbZu76P-IhTFCrh3k46SN662xbkgpK68'
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
