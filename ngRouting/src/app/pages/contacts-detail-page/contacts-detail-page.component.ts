import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//Nos dira el contenido que abra en la URL
import { IContacto } from 'src/app/models/contacts.interface';

@Component({
  selector: 'app-contacts-detail-page',
  templateUrl: './contacts-detail-page.component.html',
  styleUrls: ['./contacts-detail-page.component.scss']
})
export class ContactsDetailPageComponent implements OnInit {

  id:any|undefined;
  contacto:IContacto={
    id:0,
    nombre:'',
    apellidos:'',
    email:'',
    sexo:'mujer'

  };
  filtroPrevio:string='todos';


  constructor(private route:ActivatedRoute){}//inyectamos la dependencia ya que es una informacion que esta compartida por todos los componentes

  ngOnInit(): void {
    //Vamos a leer los parametros
    this.route.params.subscribe(
      (params:any)=>{
        if(params.id){
          this.id=params.id;
        }
      }
    );
   // Vamos a leer tambien del State el contacto
   if(history.state.data){
    this.contacto=history.state.data;
   }
   if(history.state.filtro){
    this.filtroPrevio=history.state.filtro;
   }
  }

}
