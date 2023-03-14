import { Component, OnInit } from '@angular/core';

//importar de Reactive Forms para crear un formulario anidado
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit {

  miformularioAnidado: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    // Agrupacion para teléfonos
    const telefonoFijo=this.formBuilder.group(
      {
        prefijo:'',
        numero:''

      }
    )

    const telefonoMovil=this.formBuilder.group(
      {
        prefijo:'',
        numero:''

      }
    )
    // Agrupación del formulario que contiene dos agrupaciones
    this.miformularioAnidado=this.formBuilder.group({
      telefonoFijo:telefonoFijo,
      telefonoMovil:telefonoMovil

    })
    
  }

}
