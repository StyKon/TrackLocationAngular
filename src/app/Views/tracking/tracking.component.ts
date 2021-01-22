import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {LocationService} from '../../Services/location.service';
import {formatDate} from '@angular/common';
import { Observable } from 'rxjs';

import { TokenService } from '../../Services/token.service';

declare var google;
@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  isTracking: boolean;
  track: number;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers = [];

  locationsCollection: any;
  startDate: any;
  endDate: any;
  UserID: number;
  constructor(private locationService: LocationService, private tokenService: TokenService) { }
  ngOnInit(): void{
    this.isTracking = false;
    if (this.tokenService.getUser() !== null){
       this.UserID = this.tokenService.getUser();
    }
  }

  startTracking(): void{
    this.isTracking = true;
    this.startDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    if (navigator.geolocation) {
         const track = new Observable(observer => {
          setTimeout(() => {
            observer.next(navigator.geolocation.watchPosition(position => {
                this.StartTraking(
                  position.coords.latitude,
                  position.coords.longitude,
                  position.coords.speed,
                  position.timestamp
                );
                this.updateMap(position);
                this.map.setCenter(position);
                this.map.setZoom(8);
            }));
          }, 1000);
        });
    }
  }
  // Unsubscribe from the geolocation watch using the initial ID
  stopTracking(): void {
    const currentDate = new Date();
    const endDate = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');
    const data = {
      startDate: this.startTracking.arguments(this.startDate),
      endDate,
      Tracking: this.locationsCollection,
      UserID: this.UserID,
      CarID: null,
    };
    this.locationService.SaveTracking(data);
    navigator.geolocation.clearWatch(this.track);
    this.isTracking = false;
  }

  // Save a new location to Firebase and center the map
  StartTraking(lat: number, lng: number, speed: number, timestamp: number): void {
    this.locationsCollection.add({
      lat,
      lng,
      speed,
      timestamp
    });
  }
  // Redraw all markers on the map
  updateMap(locations): void{
    // Remove all current marker
    this.markers.map(marker => marker.setMap(null));
    this.markers = [];

    for (const loc of locations) {
      const latLng = new google.maps.LatLng(loc.lat, loc.lng);
      const marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        speed: loc.speed
      });
      this.markers.push(marker);
    }
  }
}
