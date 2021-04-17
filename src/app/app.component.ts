import { Component } from '@angular/core';

import { UserService } from './UsersService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
 export class AppComponent {
}
