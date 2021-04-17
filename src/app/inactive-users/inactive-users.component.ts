// tslint:disable-next-line: max-line-length
/* A questo punto, dopo aver creato e importato i miei service, posso riutilizzare le funzioni create nelle classi, semplicemente richiamandole a mio piacimento. */

import { Component, OnInit } from '@angular/core';
import { UserService } from '../UsersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users: string[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userService.activeAccount(id);
  }

}
