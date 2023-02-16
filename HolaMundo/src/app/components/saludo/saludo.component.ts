import { Component, Input, Output, EventEmitter,OnInit, OnChanges,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy,OnChanges {

  @Input() nombre: string = 'Anonimo'; //Le decimo que este nombre lo vamos a recibir de aquel componente que renderice el mismo. Va del padre al hijo
  @Output() mensajeEmiter: EventEmitter<string>  = new EventEmitter<string>(); // Va del hijo al padre, en este caso podemos emitir al padre un string, pasamos informacion

  myStyle: Object = {
    color:'blue',
    fontSize:'20px',
    fontWeight: 'bolt',


  }

  constructor(){}
  ngOnInit(): void {
    // instrucciones previas a la renderización del componente
    console.log('ngOnInit del componente saludo'); 
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(' Cambio: (valor anterior)',changes['nombre'].previousValue); 
    console.log(' Cambio: (valor nuevo)',changes['nombre'].currentValue); 
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy del componente va a desaparecer'); 
  }
  /*
  * Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre
  */
  enviarMensajealPadre(): void{
    /*alert('Hola,'+ this.nombre + ' Alerta despachada desde un click')*/
    this.mensajeEmiter.emit('Hola,'+ this.nombre + ' Alerta despachada desde un click');
  }
}


//Orden de vida de los componentes
//* 1. ngOnChanges
//* 2. ngOnInit
//  3. ngOnDestroy