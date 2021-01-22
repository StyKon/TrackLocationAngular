import { Injectable } from '@angular/core';
import { UserModule } from '../Models/user/user.module';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ID = 'userId';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private user: UserModule) { }
  public signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: UserModule): void {
    window.sessionStorage.removeItem(USER_KEY);
   // window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
 //   window.sessionStorage.setItem(USER_ID, user.UserId.toString());
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
  public saveUserId(UserId: UserModule){
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.setItem(USER_ID, JSON.stringify(UserId));
  }

   public getUserId(){
    return JSON.parse(sessionStorage.getItem(USER_ID));
   }
}
