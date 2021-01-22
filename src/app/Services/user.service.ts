import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModule } from '../Models/user/user.module';
import { json } from 'd3';


const API_PATH = 'http://localhost:5000/api/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserModule[]>{
    return this.http.get<UserModule[]>(API_PATH, { responseType: 'json' });
  }

  getUserById(id): Observable<UserModule> {
    return this.http.get<UserModule>(API_PATH + '/' + id, { responseType: 'json' });
  }
  updateUser(id): Observable<UserModule>{
    return this.http.put<UserModule>(API_PATH + '/' + id, { responseType: 'json' });
  }
  deleteUser(id): Observable<any>{
    return this.http.delete<UserModule>(API_PATH + '/' + id , {responseType: 'json'});
  }
}
