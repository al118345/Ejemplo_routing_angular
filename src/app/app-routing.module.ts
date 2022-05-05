import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {VistaSecundariaComponent} from "./component/vista-secundaria/vista-secundaria.component";
import {VistaTerceariaComponent} from "./component/vista-tercearia/vista-tercearia.component";
import {UsersGuard} from "./guard/users.guard";




const routes: Routes = [
  { path: 'vista2', component: VistaTerceariaComponent,  canActivate: [UsersGuard] },

  { path: 'vista1/:id', component: VistaSecundariaComponent },
  { path: 'vista1', component: VistaSecundariaComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**',  component: HomeComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
