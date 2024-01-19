import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Imad';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    if(this.name=='Melissa')
    {
      this.name = 'Imad';
      this.gender = 'male';
    }
    else
    {
      this.name = 'Melissa';
      this.gender = 'female';
    }
  }

  // i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando','Eduardo','Melissa','Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }
  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(1000);

  public promiseValue: Promise<string> = new Promise( (resolve, reject ) => {
    setTimeout( () => {
      resolve( 'Teneoms datos en la promesa.' )
      this.person.name = 'Imad';
    }, 3500);
  })
}
