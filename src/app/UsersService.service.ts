// tslint:disable-next-line: max-line-length
/* Per creare il mio servizio, creo la mia classe, all'interno della quale inserirò tutte le variabili e le funzioni che utilizzerò nei vari componenti. Inserendo questa classe, all'interno del provider di App.module.ts, potrò riutilizzarla all'interno di tutti i componenti. */

import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

// tslint:disable-next-line: max-line-length
@Injectable() // è stato inserito injectable perchè inniettiamo un valore da counter Service per visulizzare quante volte è statp premuto il pulsante.

export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {}

  activeAccount (id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }

  inactiveAccount (id: number ) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

}
