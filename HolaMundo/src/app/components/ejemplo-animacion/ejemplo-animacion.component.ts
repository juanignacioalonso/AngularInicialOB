import { Component,OnInit } from '@angular/core';
import {trigger,state,transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-ejemplo-animacion',
  templateUrl: './ejemplo-animacion.component.html',
  styleUrls: ['./ejemplo-animacion.component.scss'],
  //Metadatospara la animacion del componente
  animations:[
    trigger('animaciones',[
      state('active', style({
        transform:'translate(10px,20px)'
      })),
      state('inactive',style({
        transform:'translate(40px,50px)'
      })),
      state('subir',style({
        transform:'translateY(10px)'
      })),
      state('rotar',style({
        transform:'rotate(90deg)'
      })),
      

      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out')),
      transition('active => subir', animate('1000ms ease-in')),
      transition('subir => active', animate('1000ms ease-out')),
      transition('active => rotar', animate('1000ms ease-in')),
      transition('subir => rotar',animate('1000ms ease-in')),
      transition('rotar => active', animate('1000ms ease-out')),
      transition('inactive => subir', animate('1000ms ease-in')),
      transition('subir => inactive', animate('1000ms ease-out')),
      transition('inactive => rotar', animate('1000ms ease-in')),
      transition('rotar => inactive', animate('1000ms ease-out')),
      transition('rotar => subir',animate('1000ms ease-out')),
    ]),
    
  ]
})
export class EjemploAnimacionComponent implements OnInit {

  state:string= 'inactive';


  constructor () {}

  ngOnInit(): void {

    //setInterval(()=>{
    //  if(this.state=='active'){
    //    this.state='inactive';
    //  }else{
    //    this.state='active';
    //  }
    //},1000);
  }

    cambiarEstadoActivado(){
      if(this.state=='active'){
        this.state='inactive';
      }else{
        this.state='active';
      }
    }
    activar(){
      this.state='active';
    };

    desactivar(){

    };

    
  

  subir(){
    this.state='subir';
  }
  rotar(){
    this.state='rotar';
  }

}
