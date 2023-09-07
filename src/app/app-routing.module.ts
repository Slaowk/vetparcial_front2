import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaComponent } from './components/mascota/mascota.component';
import { AlimentoComponent } from './components/alimento/alimento.component';
import { DuenoComponent } from './components/dueno/dueno.component';

const routes: Routes = [
  {path:"Mascotas", component:MascotaComponent},
  {path:"Alimentos", component:AlimentoComponent},
  {path:"Duenos", component:DuenoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
