import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LocationModule {
  LocationID: number;
  Latitude: number;
  Longitude: number;
  Speed: number;
  startDate: Date;
  endDate: Date;
 }
