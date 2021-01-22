import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { FamilyCarModule } from '../Models/family-car/family-car.module';

const API_PATH = 'http://localhost:5000/api/FamilyCars';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FamilyCarService {
  formData: FamilyCarModule;
  FamilyCarID: number;
  NameFamily: string;
  constructor(private http: HttpClient, private router: Router , private token: TokenService ) { }

  addFamilyCar(FamilyCar): Observable<FamilyCarModule>{
    return this.http.post<FamilyCarModule>(API_PATH, FamilyCar, {responseType: 'json'} );
  }
  getAllFamilyCar(): Observable<FamilyCarModule[]>{
     return this.http.get<FamilyCarModule[]>(API_PATH, {responseType: 'json'});
  }
  getFamilyCarById(id): Observable<FamilyCarModule>{
    return this.http.get<FamilyCarModule>(API_PATH + '/' + id, {responseType: 'json'});
  }
  editeFamilyCar(id, familycar): Observable<FamilyCarModule>{
    return this.http.put<FamilyCarModule>(API_PATH + '/' + id, familycar, {responseType: 'json'} );
  }
  deleteFamilyCar(id): Observable<FamilyCarModule>{
    return this.http.delete<FamilyCarModule>(API_PATH + '/' + id, {responseType: 'json'});
  }
}
