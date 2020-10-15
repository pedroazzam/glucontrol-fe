import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private newUser: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/admin/user/all';
    this.newUser = 'http://localhost:8080/api/signup';
   }

   public findAll(): Observable<User[]> {
    console.log('Passo aqui findAll')
    return this.http.get<User[]>(this.usersUrl);
  }
 
  public save(user: User) {
    return this.http.post<User>(this.newUser, user);
  }

/*
  public save(user: User){
    return this.http.post(this.newUser, user);
  }
  */
}
