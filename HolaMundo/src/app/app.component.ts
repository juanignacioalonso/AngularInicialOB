import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaMundo';
  usuario= '@juan'

  /* Esta Funcion se ejecuta cuando en el hijo (Saludo component) se pulse un boton */
  recibirMensajedelHijo(evento:string){
    alert(evento);
  }

}
