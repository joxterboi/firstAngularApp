import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
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
    this.loaded = true;
  }


  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();    
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
  }
}
