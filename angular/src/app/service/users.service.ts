import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserInterface } from '../interface/user.interface';

@Injectable()
export class UsersService {

  private _usersApiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this._usersApiUrl);
  }

}
