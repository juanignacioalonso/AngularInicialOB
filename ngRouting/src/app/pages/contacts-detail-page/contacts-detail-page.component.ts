import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//Nos dira el contenido que abra en la URL

@Component({
  selector: 'app-contacts-detail-page',
  templateUrl: './contacts-detail-page.component.html',
  styleUrls: ['./contacts-detail-page.component.scss']
})
export class ContactsDetailPageComponent implements OnInit {

  id:any|undefined;


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
   
  }

}
