import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  //Creamos una lista de contactos
  listaContactos:IContacto[]=[];
  contactoSeleccionado:IContacto|undefined;
  //Inyectamos en el constructor el servicio del contacto

  //Suscripcion de servicio 
  subscription: Subscription|undefined;

  constructor(private contactoService: ContactoService){}
  

  ngOnInit(): void {
    //Obtener la lista de contactos que nos brinda el servicio
    //Una peticion a un servicio
    this.contactoService.obtenerContactos()
      .then((lista: IContacto[])=> this.listaContactos = lista)
      .catch((error)=>console.error('Ha habido un error al recuperar la lista de contacto: '+(error)))
      .finally(()=>console.log('Petición de lista de Contactos terminada'));
  }
  obtenerContacto(id:number){
    //console.log("Obtener info del contacto: "+id)
    this.subscription = this.contactoService.obtenerContactoPorID(id)?.subscribe(
      (contacto:IContacto)=>this.contactoSeleccionado=contacto)
      
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
    
}
