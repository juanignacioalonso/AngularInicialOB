import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { IJugador } from 'src/app/models/jugador.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit {

  dob: Date = new Date(1987,9,17);
  cambio:boolean = true;
  nombre:string='Juan';
  numero_pi:number= 3.141592653897
  precioCarro:number=100;
  persona:IContacto={
    id:0,
    nombre:'Juan',
    apellidos:'Alonso',
    edad:30,
    email:'zalbak87@gmail.com'
  }
  cantidad:number=0.35;
  textoLargo:string='ddsjhdjhdas dkjhhduñdQIW AAJSA';

  // ejemplo para PIPE calcular puntuación

  jugador1:IJugador={
    nombre:'Juan',
    puntos:[10,30,40,0]
  }

  jugador2:IJugador={
    nombre:'Maria',
    puntos:[15,25,30,0]
  }

  constructor (){}

  ngOnInit(): void {
    
  }

  get dateFormat(){
    return this.cambio ? 'shortDate':'fullDate'
  }

  cambiarFormato(){
    this.cambio = !this.cambio;
  }

}
