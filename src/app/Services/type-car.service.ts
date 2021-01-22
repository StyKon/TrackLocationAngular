import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import {TypeCarModule} from '../Models/type-car/type-car.module';

const API_PATH = 'http://localhost:5000/api/TypeCars';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TypeCarService {

  constructor(private http: HttpClient, private router: Router , private token: TokenService ) { }
  addTypeCar(TypeCar): Observable<TypeCarModule>{
    return this.http.post<TypeCarModule>(API_PATH, TypeCar );
  }
  getTypeCars(): Observable<TypeCarModule[]>{
    return this.http.get<TypeCarModule[]>(API_PATH , { responseType: 'json' } );
  }
  getTypeCarById(id): Observable<TypeCarModule>{
    return this.http.get<TypeCarModule>(API_PATH + '/' + id, { responseType: 'json' } );
  }
  editeTypeCar(id , typecar): Observable<TypeCarModule>{
    return this.http.put<TypeCarModule>(API_PATH + '/' + id, typecar);
  }
  deleteTypeCar(id): Observable<TypeCarModule>{
    return this.http.delete<TypeCarModule>(API_PATH + '/' + id, { responseType: 'json' } );
  }
}
