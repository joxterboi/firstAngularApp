import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/User';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;


  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johnDoe@gmail.com',
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Joakim',
        lastName: 'Kjellander',
        email: 'joa123kim456@gmail.com',
        registered: new Date('03/01/2018 05:42:17'),
        hide: true
      },
      {
        firstName: 'Joxter',
        lastName: 'Boi',
        email: 'joxter@boi.com',
        registered: new Date('12/01/2017 07:31:34'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next("brad");
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user)
  }

}
