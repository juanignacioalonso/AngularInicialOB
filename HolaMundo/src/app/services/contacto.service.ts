import { Injectable } from '@angular/core';


// Iportamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

// importamos Observable de rxjs
 import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  //La promesa emite valores en todo momento
  obtenerContactos(): Promise<IContacto[]>{

     return Promise.resolve(CONTACTOS);
      
  }
  //El observable emite valores en el futuro cada x tiempo
  obtenerContactoPorID(id:number): Observable<IContacto>|undefined{
    //Buscamos el contacto por id dentro de la lista de CONTACTOS mockeados
    const contacto=CONTACTOS.find((contacto:IContacto)=>contacto.id===id); 
    // Creamos el observable 
    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto); // emitir un valor a todo componente suscripto
      observer.complete(); // no emitimos más
    })
    
    if(contacto){
      return observable;
    }else{
      return;
    }
  }
}
