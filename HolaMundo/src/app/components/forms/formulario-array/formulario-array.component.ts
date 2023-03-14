import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit{

  miFormularioArray:FormGroup=new FormGroup({});

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {

    this.miFormularioArray = this.formBuilder.group({
      nombre:'',
      apellidos:'',
      telefonos:this.formBuilder.array([]) // inicializamos la lista de telefonos vacia
    })
    
  }

  //Metodo Geter para obtener el Form Array de la lista de telefonos

  get telefonosFormulario(): FormArray{
    return this.miFormularioArray.get('telefonos') as FormArray
  }

  //Metodo para añadir telefonos
  anadirTelefono(){
    //Creamos un grupo telefono
    const telefonoNuevo = this.formBuilder.group({
      prefijo:'',
      numero:''
    });
    //Añadimos al grupo a la lista de telefonos
    this.telefonosFormulario.push(telefonoNuevo);
  }
  //Metodo para eliminar telefonos de la lista
  eliminarTelefonos(index:number){
    this.telefonosFormulario.removeAt(index);
  }

}
