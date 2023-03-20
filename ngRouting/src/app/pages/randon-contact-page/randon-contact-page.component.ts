import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-randon-contact-page',
  templateUrl: './randon-contact-page.component.html',
  styleUrls: ['./randon-contact-page.component.scss']
})
export class RandonContactPageComponent implements OnInit {

  contact:IRandomContact| undefined;

  constructor (private randomUsersService:RandomUserService){}

   ngOnInit(): void {
    this.randomUsersService.obtenerRandomContact().subscribe((response:Results)=>{
      this.contact=response.results[0];// Se lo pasariamos al Random Contacto
    });
  }
  obtenerNuevoContacto(){
    this.randomUsersService.obtenerRandomContact().subscribe(
      {
        next:(response:Results)=>{
          this.contact=response.results[0];
        },
        error:(error)=>console.error(error),
        complete:()=> console.info('Petición de Random Contact terminada ')
      }
    );
  }
  obtenerListaContactos(n:number){
    this.randomUsersService.obtenerRandomContacts(n).subscribe(
      {
        next:(response:Results[])=>{
          console.log(response);
        },
        error:(error)=>console.error(error),
        complete:()=> console.info('Petición de Random Contacts terminada ')
      }
    );
  }
}
