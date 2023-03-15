import { NgModule,LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
//Modulos Angula Mterial
import {MatFormFieldModule} from '@angular/material/form-field';
//Locale para PIPES
import { registerLocaleData } from '@angular/common';
import  localeES  from '@angular/common/locales/es'; 
registerLocaleData(localeES);//Registramos el LOCALE_ID de 'es' para poder usarlo en los pipe

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, //Para poder usar ngModul
    //Importamos acá nuestros modulos personalizados
    //Importamos el modulo HttpClientModule para hacer peticiones Http
    HttpClientModule, 
    //Importamos Reactive FormsModuls para trabajar con formularios reactivos
    ReactiveFormsModule,
    //Importamos los modulos de Angular Material que usamos en los formualarios
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [
    //Registramos el locle de ES para que los pipes salgan en español
    {
      provide:LOCALE_ID,useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
