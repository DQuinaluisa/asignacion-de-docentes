import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocenteComponent } from './docente/docente.component';
import { AsignacionComponent } from './asignacion/asignacion.component';


const routes: Routes = [
  {path:'catalogo',loadChildren:'./catalogo/catalogo.module#CatalogoModule'},
  {path:'docente',component:DocenteComponent},
  {path:'asignacion',component:AsignacionComponent},
  {path:'not.found',redirectTo:'/catalogo', pathMatch:'full'},
  {path:'**',redirectTo:'/catalogo',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
