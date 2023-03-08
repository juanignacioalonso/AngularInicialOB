
import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacts.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  listaContactos:IContacto[]=[
    {
      id:0,
      nombre:'Juan',
      apellidos:'Alonso',
      email:'zalbak87@gmail.com'
    },
    {
      id:1,
      nombre:'Pedro',
      apellidos:'Martinez',
      email:'pedro@gmail.com'
    },
    {
      id:2,
      nombre:'Guadalupe',
      apellidos:'Montenegro',
      email:'guada@gmail.com'
    }
  ]

  constructor(){}

  ngOnInit(): void {
    
  }

}
