import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AuthGuard } from './guards/auth.guard';
import { ContactsDetailPageComponent } from './pages/contacts-detail-page/contacts-detail-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RandonContactPageComponent } from './pages/randon-contact-page/randon-contact-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

//El orden de las rutas importa, si hay sub rutas debe ir debajo de la que hace referencia

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        component: HomePageComponent,
        canActivate:[AuthGuard]
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
        path:'random',
        component:RandonContactPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'tasks',
        component: TasksPageComponent,
        canActivate:[AuthGuard]
      },
    ]
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
