import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router'; //para poder navegar entre paginas por funciones
import { IRandomContact } from 'src/app/models/randomuser';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
  
})
export class HomePageComponent implements OnInit {

  token:string|null=null;

  contactoSeleccionado:IRandomContact|undefined;

  constructor(private router:Router){}//ahora lo podemos inyectar

  ngOnInit(): void {

    //Comprobar si existe el token en el sessionStorage
    this.token=sessionStorage.getItem('token');

    //Leemos del historial de navegacion
    if(history.state.data){
      console.log(history.state.data);
      this.contactoSeleccionado=history.state.data
    }
    
  }

  navegarAContacts():void{

    let navigationsExtras: NavigationExtras={
      queryParams:{
        sexo:'todos',
      }
    }

    this.router.navigate(['/dashboard/contacts'],navigationsExtras); //Navegar de forma programatica
  }

}
