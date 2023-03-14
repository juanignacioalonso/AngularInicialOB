import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'; //Validators agrega las validaciones


@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss']
})
export class FormularioValidadoComponent implements OnInit{

  miformularioValidado:FormGroup= new FormGroup({});

  constructor(private forBuilder:FormBuilder){}

  ngOnInit(): void {

    this.miformularioValidado = this.forBuilder.group({
      nombre:['',Validators.required],//Campo obligatorio
      apellidos:'',
      //Campo obligatorio con maximos y minimos
      edad:['',Validators.compose([Validators.required, Validators.min(18),Validators.max(99)])],//para agregar mas de una validación
      //Campo obligatorio y de tipo email
      email:['',Validators.compose([Validators.required,Validators.email])],
      //Campo obligatorio 6y con expresión regular
      password:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])],
      //Campo Booleano con True como obligatorio
      acepta:[false,Validators.requiredTrue]
    })
    
  }
  //Para obtener los datos
  get nombre(){
    return this.miformularioValidado.get("nombre");
  }
  get apellidos(){
    return this.miformularioValidado.get("apellidos");
  }
  get edad(){
    return this.miformularioValidado.get("edad");
  }
  get email(){
    return this.miformularioValidado.get("email");
  }
  get password(){
    return this.miformularioValidado.get("password");
  }
  get acepta(){
    return this.miformularioValidado.get("acepta");
  }

  //Metodo de Submit del formulario

  enviarFormulario(){
    //Controlar que el formulario sea valido
    if(this.miformularioValidado.valid){
      console.table(this.miformularioValidado.value);
      // resetear los campos del formulario
      this.miformularioValidado.reset();
    }
  }
}
