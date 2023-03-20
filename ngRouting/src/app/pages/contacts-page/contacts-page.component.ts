
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router,Route } from '@angular/router';
import { IContacto } from 'src/app/models/contacts.interface';
import { IRandomContact, Results } from 'src/app/models/randomuser';
import { ContactoService } from 'src/app/services/contacto.service';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  filtroSexo:string='todos';
  
  listaRandomContacts:IRandomContact[]=[];

  constructor(private router:Router, private route:ActivatedRoute,private randomUserService:RandomUserService){}

  ngOnInit(): void {
    
    //Obtener los Query Params
    this.route.queryParams.subscribe((params:any)=>{
      console.log('QueryParams:',params.sexo)
      if(params.sexo){
        this.filtroSexo=params.sexo

        if(params.sexo==='female'||params.sexo==='male'){
          
          this.randomUserService.obtenerRandomContacts(10,params.sexo).subscribe(
            {
              next:(response:Results)=>{
                
                response.results.forEach((randomContacts:IRandomContact,index:number)=>{
                  this.listaRandomContacts.push(randomContacts);
                })
                console.log(this.listaRandomContacts);
              },
              error:(error)=>console.error(error),
              complete:()=> console.info('Petición de Random Contacts terminada ')
            }
          );
          
        }else{
          this.randomUserService.obtenerRandomContacts(10).subscribe(
            {
              next:(response:Results)=>{
                
                response.results.forEach((randomContacts:IRandomContact,index:number)=>{
                  this.listaRandomContacts.push(randomContacts);
                })
                console.log(this.listaRandomContacts);
              },
              error:(error)=>console.error(error),
              complete:()=> console.info('Petición de Random Contacts terminada ')
            }
          );
        }
      }
      //Implementación para obtener la lista de contactos aleatorio
      
    });
    
  }
  //Ejemplo de paso de información entre componentes  a traves del ESTADO
    volverAhome(contacto:IRandomContact){

      let navigationExtras: NavigationExtras={
        state:{
          data:contacto
        }
      }

      this.router.navigate(['/home'],navigationExtras);
    }
}
