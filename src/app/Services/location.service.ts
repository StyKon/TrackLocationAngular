import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationModule } from '../Models/location/location.module';
const API_PATH = 'http://localhost:5000/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient ) { }
  getTracking(): Observable<LocationModule[]>{
    return this.http.get<LocationModule[]>(API_PATH + 'Locations');
  }

  SaveTracking(track): Observable<LocationModule>{
    return this.http.post<LocationModule>(API_PATH + 'Locations', track);
  }

  deleteTracking(id): Observable<LocationModule>{
    return this.http.delete<LocationModule>(API_PATH + 'Locations/' + id);
  }
  // Get All Tracking by User
  getTrackingsByUser(userid: any): Observable<LocationModule[]>{
    return this.http.get<LocationModule[]>(API_PATH + 'UserLocations/' + userid);
  }
  // Get Tracking ID by User
  getTrackingByUser(userid: any , trackId: any): Observable<LocationModule>{
    return this.http.get<LocationModule>(API_PATH + 'UserLocations/' + userid + '/' + trackId);
  }
  // Delete Tracking ID buy User
  deleteTrackingByUser(userid: any , trackId: any): Observable<LocationModule>{
    return this.http.delete<LocationModule>(API_PATH + 'UserLocations/' + userid + '/' + trackId);
  }
}
