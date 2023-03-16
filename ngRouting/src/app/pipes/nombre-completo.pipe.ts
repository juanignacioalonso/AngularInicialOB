import { Pipe, PipeTransform } from '@angular/core';
import { IContacto } from '../models/contacts.interface';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto: IContacto, ...args: unknown[]): string {
    return contacto.nombre+' '+contacto.apellidos;
  }

}