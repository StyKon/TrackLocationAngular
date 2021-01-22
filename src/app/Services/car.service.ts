import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { CarModule} from '../Models/car/car.module';
const API_PATH = 'http://localhost:5000/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient, private router: Router , private token: TokenService ) { }
   // to get all cars in the Database
   getListCar(): Observable<CarModule[]>{
    return this.http.get<CarModule[]>(API_PATH + 'Cars', {responseType: 'json'});
   }
   // to get all cars from one user
   getUseCars(userid): Observable<CarModule[]>{
    return this.http.get<CarModule[]>(API_PATH + 'UserCars/' + userid , {responseType: 'json'});
   }
   // to get specifique car from one user
   getUserCar(userid: any , carid: any): Observable<CarModule[]>{
    return this.http.get<CarModule[]>(API_PATH + 'UserCars/' + userid + '/' + carid, {responseType: 'json'});
    }
   // ADD car for specifique user
   addUserCar(car): Observable<CarModule>{
      return this.http.post<CarModule>(API_PATH + 'Cars', car);
   }
   // Edite Car User
   editeUserCar(userid: any , carid: any): Observable<CarModule>{
    return this.http.put<CarModule>(API_PATH + 'UserCars/' + userid + '/' + carid, {responseType: 'json'});
   }
   // delete car user
   deleteUserCar(userid: any, carid: any): Observable<CarModule>{
    return this.http.delete<CarModule>(API_PATH + 'UserCars/' + userid + '/' + carid, {responseType: 'json'});
   }
}
