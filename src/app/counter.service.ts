/* Descrivo una classe, nella quale identifico i metodi che andrò ad utilizzare, in questo caso nel service UserService */

export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;


  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log('Active to Inactive', this.activeToInactive);

  }

  incrementInactiveToActive() {
    this.inactiveToActive++;
    console.log('Inactive to Active', this.inactiveToActive);
  }


}
