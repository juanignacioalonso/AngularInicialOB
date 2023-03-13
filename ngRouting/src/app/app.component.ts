import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngRouting';

  token:string| null = null;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}


//Paso de información entre componentes
// 1- a traves de imputs y ouputs
// 2- a traves de inyección de constructores de componentes hijos @ViewChild, @ContentChild o @ContentChildren
// 3- a traves de Servicios (Promesas y Observables, etc.)--> NGRX (GESTION DEL ESTADO DE LA APLICACIÓN)
// 4- a traves de parametrosentre rutas
