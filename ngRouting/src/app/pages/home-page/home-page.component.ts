import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //para poder navegar entre paginas por funciones

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router){}//ahora lo podemos inyectar

  ngOnInit(): void {
    
  }

  navegarAContacts():void{
    this.router.navigate(['/contacts']); //Navegar de forma programatica
  }

}
