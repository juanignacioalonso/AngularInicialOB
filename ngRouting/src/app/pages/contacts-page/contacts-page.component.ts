
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router,Route } from '@angular/router';
import { IContacto } from 'src/app/models/contacts.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  filtroSexo:string='todos';
  listaContactos:IContacto[]=[];

  constructor(private router:Router, private route:ActivatedRoute,private contactService:ContactoService){}

  ngOnInit(): void {
    
    //Obtener los Query Params
    this.route.queryParams.subscribe((params:any)=>{
      console.log('QueryParams:',params.sexo)
      if(params.sexo){
        this.filtroSexo=params.sexo
      }
      
      //Obtener la lista de contactos
      this.contactService.obtenerContactos(this.filtroSexo).then(
        (lista)=> this.listaContactos=lista
        )
        .catch((error)=>console.error('Hubo un error al obtener los contactos',error))
        
        .finally(()=>console.info('Petición de contactos terminada '))

    });
    
    
    
  }
  //Ejemplo de paso de información entre componentes  a traves del ESTADO
    volverAhome(contacto:IContacto){

      let navigationExtras: NavigationExtras={
        state:{
          data:contacto
        }
      }

      this.router.navigate(['/home'],navigationExtras);
    }


}
