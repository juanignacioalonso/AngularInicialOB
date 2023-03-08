import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AuthGuard } from './guards/auth.guard';
import { ContactsDetailPageComponent } from './pages/contacts-detail-page/contacts-detail-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

//El orden de las rutas importa, si hay sub rutas debe ir debajo de la que hace referencia

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'home',
    component: HomePageComponent,
    children:[
      {
        path:'hijo',
        component:HomePageComponent
      }
    ]
  },
  {
    path:'contacts',
    component: ContactsPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'contacts/:id',//Forma de pasar parametros a una ruta
    component: ContactsDetailPageComponent,
    canActivate:[AuthGuard]//De esta maneta evitamos que se cargue esta ruta
  },
  {
    path:'**',
    component:NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
